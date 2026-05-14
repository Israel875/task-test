# Task Manager — Testes Unitários com Next.js 15

Projeto desenvolvido como tarefa do curso **Full Stack Java** da **EBAC**, com o objetivo de praticar testes unitários em Next.js 15 com App Router, usando **Jest** e **Testing Library**.

---

## Funcionalidades

- Listagem de tarefas carregadas via Server Component
- Adição de novas tarefas via Client Component com formulário controlado
- Hook personalizado `useContadorDeTarefas` para gerenciar e contar tarefas
- Testes unitários cobrindo componentes, hook e integração entre eles

---

## Estrutura do Projeto

```
├── app/
│   └── page.tsx                    # Server Component (carrega tarefas)
├── components/
│   ├── ListaDeTarefas.tsx          # Client Component principal
│   └── NovaTarefa.tsx              # Client Component de formulário
├── hooks/
│   └── useContadorDeTarefas.ts     # Hook personalizado
├── lib/
│   └── tarefas.ts                  # Dados simulados (mock de API)
├── __tests__/
│   ├── NovaTarefa.test.tsx         # Testes do formulário
│   ├── ListaDeTarefas.test.tsx     # Testes de integração
│   └── useContadorDeTarefas.test.ts # Testes do hook
```

---

## Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalar dependências
```bash
npm install
```

### Rodar o projeto
```bash
npm run dev
```
Acesse: `http://localhost:3000`

### Rodar os testes
```bash
# Todos os testes
npm test

# Modo watch (re-executa ao salvar)
npm run test:watch

# Com relatório de cobertura
npm run test:coverage
```

---

## Testes Implementados

### `NovaTarefa.test.tsx`
- Renderização do input e botão
- Chamada correta da função `onAdicionar` ao submeter
- Não submete com input vazio
- Limpeza do input após submissão

### `useContadorDeTarefas.test.ts`
- Retorno correto do total inicial
- Retorno correto da lista de tarefas
- Incremento do total ao adicionar tarefa
- Dados corretos da tarefa adicionada

### `ListaDeTarefas.test.tsx`
- Renderização do título e total
- Renderização de todas as tarefas
- Adição de tarefa via formulário e atualização do total

---

## Tecnologias

- **Next.js 15** (App Router)
- **TypeScript**
- **Jest 30**
- **Testing Library** (React + user-event)
- **@testing-library/jest-dom**

---

## Padrão utilizado nos testes

Todos os testes seguem o padrão **AAA**:
- **Arrange** — prepara o ambiente e os dados
- **Act** — executa a ação
- **Assert** — verifica o resultado esperado
