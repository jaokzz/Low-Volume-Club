# Contratos de API - Site Alex Liprevi

## Visão Geral
Site institucional para personal trainer com sistema de depoimentos funcional. Frontend já implementado com mock data, backend será implementado para persistência real dos depoimentos.

## Mock Data (frontend/src/mock.js)
Dados mockados incluem:
- Informações do treinador (nome, headline, links sociais)
- Benefícios do método Low Volume
- Métricas de resultados
- 3 depoimentos de exemplo

## API Endpoints a Implementar

### 1. GET /api/testimonials
**Descrição**: Buscar todos os depoimentos aprovados
**Response**:
```json
[
  {
    "id": "string",
    "name": "string",
    "comment": "string",
    "date": "YYYY-MM-DD",
    "approved": true
  }
]
```

### 2. POST /api/testimonials
**Descrição**: Criar novo depoimento
**Request Body**:
```json
{
  "name": "string (required, min 2 chars)",
  "comment": "string (required, min 10 chars)"
}
```
**Response**:
```json
{
  "id": "string",
  "name": "string",
  "comment": "string",
  "date": "YYYY-MM-DD",
  "approved": false,
  "message": "Depoimento enviado com sucesso! Será publicado após aprovação."
}
```

## Modelo MongoDB

### Collection: testimonials
```python
{
  "_id": ObjectId,
  "name": str,          # Nome do cliente
  "comment": str,       # Depoimento
  "date": datetime,     # Data de criação
  "approved": bool,     # Status de aprovação (default: False)
  "created_at": datetime
}
```

## Integrações Frontend-Backend

### Alterações necessárias no Home.jsx:

1. **Remover import do mock.js** (linha de mockTestimonials)
2. **useEffect para carregar depoimentos**:
```javascript
useEffect(() => {
  fetchTestimonials();
}, []);

const fetchTestimonials = async () => {
  const response = await axios.get(`${API}/testimonials`);
  setTestimonials(response.data);
};
```

3. **handleSubmitTestimonial - integrar com API real**:
```javascript
const handleSubmitTestimonial = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/testimonials`, newTestimonial);
    // Não adiciona na lista (aguarda aprovação)
    setNewTestimonial({ name: '', comment: '' });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  } catch (error) {
    console.error('Erro ao enviar depoimento:', error);
    alert('Erro ao enviar depoimento. Tente novamente.');
  } finally {
    setIsSubmitting(false);
  }
};
```

4. **Mensagem de sucesso atualizada**:
Alterar texto para: "Depoimento enviado! Será publicado após aprovação."

## Backend Implementation Checklist

### server.py
- [ ] Criar modelo Pydantic `Testimonial` e `TestimonialCreate`
- [ ] Endpoint GET `/api/testimonials` (retornar apenas approved=True)
- [ ] Endpoint POST `/api/testimonials` (criar com approved=False)
- [ ] Validação: nome mínimo 2 caracteres, comentário mínimo 10 caracteres
- [ ] Tratamento de erros adequado

### Futuro (Opcional - Admin Panel)
- Endpoint para aprovar depoimentos (PUT /api/testimonials/{id}/approve)
- Endpoint para deletar depoimentos (DELETE /api/testimonials/{id})
- Sistema de autenticação para admin

## Fluxo de Dados

1. **Usuário acessa o site** → Frontend carrega depoimentos aprovados do backend
2. **Usuário preenche formulário** → POST /api/testimonials cria depoimento (approved=False)
3. **Admin aprova depoimento** → Manual no MongoDB ou futura interface admin
4. **Depoimento aprovado aparece** → GET /api/testimonials retorna apenas approved=True

## Links Externos (Já implementados no frontend)

- **WhatsApp**: Placeholder em mock.js - atualizar com número real
- **Instagram**: Placeholder em mock.js - atualizar com @ real
- **Checkout Kiwify**: Placeholder em mock.js - atualizar com link real da Kiwify

## Observações
- Depoimentos novos não aparecem imediatamente (sistema de moderação)
- Frontend já está completamente funcional com mock data
- Backend é necessário apenas para persistência e moderação dos depoimentos
