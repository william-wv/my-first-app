# useState vs useEffect

## `useState` — Armazena e atualiza dados

Serve para guardar um valor que, quando muda, faz a tela renderizar de novo.

```tsx
const [distancia, setDistancia] = useState(50);
// distancia é o valor atual
// setDistancia atualiza o valor e redesenha a tela
```

**Quando usar:** sempre que a tela precisa reagir a uma mudança de dados (input, contador, flag booleana, etc.)

---

## `useEffect` — Executa código em resposta a eventos do ciclo de vida

Serve para rodar um "efeito colateral": algo que não é renderização, como logs, timers, alertas ou chamadas de API.

```tsx
useEffect(() => {
  // Roda quando o componente aparece na tela (mount)
  console.log('Iniciado');

  return () => {
    // Roda quando o componente sai da tela (unmount)
    console.log('Desligado');
  };
}, []); // [] = só roda uma vez

useEffect(() => {
  // Roda toda vez que `distancia` mudar
  if (distancia < 20) Alert.alert('Perigo!');
}, [distancia]); // [distancia] = roda quando distancia muda
```

---

## Resumo da diferença

| | `useState` | `useEffect` |
|---|---|---|
| **Para que serve** | Guardar e atualizar valores | Executar ações em resposta a eventos |
| **Quando executa** | Ao chamar o `set...` | No mount, unmount ou quando uma dependência muda |
| **Retorna** | O valor e a função de atualização | Opcionalmente uma função de cleanup |
| **Exemplo prático** | Guardar a distância digitada | Disparar alerta quando a distância muda |

---

## Como os dois trabalham juntos

No projeto da atividade 4 (Sensor de Estacionamento):

- `useState` guarda a distância digitada pelo usuário
- `useEffect` com `[]` inicia e para o intervalo de log (mount/unmount)
- `useEffect` com `[distancia]` observa a distância e dispara o alerta quando ela muda

```tsx
const [distancia, setDistancia] = useState(50); // armazena o valor

useEffect(() => {
  console.log('📡 Sistema Iniciado');
  const interval = setInterval(() => console.log('⏱️ ativo...'), 2000);
  return () => {
    clearInterval(interval);
    console.log('📴 Sistema Desligado');
  };
}, []);

useEffect(() => {
  if (distancia < 20) Alert.alert('⚠️ PERIGO: Muito Próximo!');
}, [distancia]);
```
