# ⚔️ WYD Quest Tracker

Um tracker de missões diárias para o jogo With Your Destiny (WYD), com sistema de notificações, streaks e progressão por níveis.

![WYD Quest Tracker](https://img.shields.io/badge/version-1.0.0-orange) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎮 Funcionalidades

### ✅ Sistema de Quests
- **11 missões diárias** para acompanhar:
  - Check-in diário
  - Espólios
  - Expedição
  - Infernal
  - Deserto Desconhecido
  - Pedido de Caça
  - Intel Report
  - 4 horários de Arena (13:00, 19:00, 20:30, 23:00)

### 🔔 Notificações Inteligentes
- Alertas sonoros **5 minutos antes** de cada Arena começar
- Notificação visual no topo da tela
- Som gerado pela Web Audio API (não precisa de arquivos externos)
- Controle automático para não repetir notificações

### 📊 Sistema de Progressão
- **XP e Níveis**: Ganhe 10 XP por quest completada
- **Bônus de conclusão**: +50 XP ao completar todas as quests do dia
- **Sistema de Streak**: Mantenha sua sequência de dias consecutivos
- Barra de progresso visual para o próximo nível

### 🎨 Temas
- **Tema Claro**: Visual dourado inspirado no WYD
- **Tema Escuro**: Modo noturno para jogar à noite
- Alternância fácil com botão no canto superior

### ⏰ Reset Automático
- Contador regressivo para o reset diário (meia-noite)
- Quests resetam automaticamente todo dia
- Streak é mantido se você completar pelo menos uma quest

## 🚀 Como Usar

### Instalação Local
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/wyd-quest-tracker.git
```

2. Abra o arquivo `index.html` no seu navegador

### GitHub Pages
Acesse diretamente: `https://seu-usuario.github.io/wyd-quest-tracker`

### Uso
1. **Clique em qualquer quest** para marcá-la como concluída
2. **Clique novamente** para desmarcar (remove 10 XP)
3. **Alterne o tema** usando o botão 🌓 no canto superior direito
4. **Mantenha a página aberta** para receber notificações das Arenas

## 📱 Compatibilidade

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (iOS/Android)
- ✅ PWA Ready (pode ser instalado como app)

## 🔊 Sobre as Notificações

### Horários de Notificação
| Arena | Horário | Notificação |
|-------|---------|-------------|
| Arena 1 | 13:00 | 12:55 |
| Arena 2 | 19:00 | 18:55 |
| Arena 3 | 20:30 | 20:25 |
| Arena 4 | 23:00 | 22:55 |

### Requisitos
- **Importante**: O navegador exige que o usuário interaja com a página (clique) antes de permitir sons
- Mantenha a aba/página aberta para receber notificações
- Notificações são resetadas automaticamente todo dia

## 💾 Armazenamento de Dados

Todos os dados são salvos localmente no navegador usando `localStorage`:
- Progresso das quests
- Streak atual
- Nível e XP total
- Tema selecionado
- Controle de notificações

**Nota**: Os dados permanecerão salvos mesmo após fechar o navegador, a menos que você limpe o cache/cookies.

## 🎯 Sistema de XP

```
Quest completada: +10 XP
Todas as quests do dia: +50 XP (bônus)
Próximo nível: 100 XP
```

## 🛠️ Tecnologias

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização e animações
- **JavaScript (Vanilla)**: Lógica e funcionalidades
- **Web Audio API**: Geração de sons de notificação
- **LocalStorage API**: Persistência de dados

## 📝 Funcionalidades Futuras

- [ ] Notificações do navegador (Web Notifications API)
- [ ] Histórico de quests completadas
- [ ] Conquistas/Achievements especiais
- [ ] Exportar/Importar dados
- [ ] Estatísticas semanais/mensais
- [ ] Personalização de horários de Arena
- [ ] Modo PWA completo com offline support

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a [Licença MIT](LICENSE).

## 👤 Autor

Criado para a comunidade WYD Brasil 🇧🇷

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/wyd-quest-tracker/issues) com:
- Descrição do problema
- Passos para reproduzir
- Navegador e versão
- Screenshots (se aplicável)

## ⭐ Suporte

Se este projeto te ajudou, considere dar uma ⭐ no repositório!

---

**Aviso**: Este é um projeto não-oficial e não tem afiliação com o jogo With Your Destiny ou seus desenvolvedores.
