import React, { useState, useEffect } from 'react';
import { Trophy, Flame, Star, CheckCircle2, Circle } from 'lucide-react';

const QuestTracker = () => {
  const quests = [
    'Check-in',
    'Espólios',
    'Expedição',
    'Infernal',
    'Deserto Desconhecido',
    'Pedido de Caça',
    'Intel Report'
  ];

  const getStoredData = () => {
    const stored = localStorage.getItem('questData');
    if (stored) {
      const data = JSON.parse(stored);
      const today = new Date().toDateString();
      
      // Se é um novo dia, reseta as quests mas mantém streak
      if (data.lastUpdate !== today) {
        const allCompleted = data.completed.length === quests.length;
        return {
          completed: [],
          streak: allCompleted ? data.streak + 1 : 0,
          totalCompleted: data.totalCompleted || 0,
          lastUpdate: today,
          level: data.level || 1,
          xp: data.xp || 0
        };
      }
      return data;
    }
    return {
      completed: [],
      streak: 0,
      totalCompleted: 0,
      lastUpdate: new Date().toDateString(),
      level: 1,
      xp: 0
    };
  };

  const [data, setData] = useState(getStoredData);
  const [showAnimation, setShowAnimation] = useState('');

  useEffect(() => {
    localStorage.setItem('questData', JSON.stringify(data));
  }, [data]);

  // Verifica reset à meia-noite
  useEffect(() => {
    const checkMidnight = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        const allCompleted = data.completed.length === quests.length;
        setData(prev => ({
          ...prev,
          completed: [],
          streak: allCompleted ? prev.streak + 1 : 0,
          lastUpdate: now.toDateString()
        }));
      }
    }, 60000); // Checa a cada minuto

    return () => clearInterval(checkMidnight);
  }, [data.completed.length]);

  const toggleQuest = (quest) => {
    setData(prev => {
      const isCompleted = prev.completed.includes(quest);
      const newCompleted = isCompleted
        ? prev.completed.filter(q => q !== quest)
        : [...prev.completed, quest];
      
      const xpGain = isCompleted ? -15 : 15;
      const newXp = Math.max(0, prev.xp + xpGain);
      const newLevel = Math.floor(newXp / 100) + 1;
      
      if (!isCompleted) {
        setShowAnimation(quest);
        setTimeout(() => setShowAnimation(''), 500);
      }

      return {
        ...prev,
        completed: newCompleted,
        totalCompleted: isCompleted ? prev.totalCompleted - 1 : prev.totalCompleted + 1,
        xp: newXp,
        level: newLevel
      };
    });
  };

  const progress = (data.completed.length / quests.length) * 100;
  const xpProgress = (data.xp % 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header com Stats */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-purple-500/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Quest Tracker</h1>
              <p className="text-purple-300">Missões Diárias</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Flame className="w-6 h-6" />
                <span className="text-2xl font-bold">{data.streak}</span>
              </div>
              <p className="text-sm text-gray-400">dias de streak</p>
            </div>
          </div>

          {/* Level e XP */}
          <div className="bg-slate-900/50 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Level {data.level}</span>
              </div>
              <span className="text-sm text-purple-300">{data.xp} XP</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">{100 - xpProgress} XP para próximo nível</p>
          </div>

          {/* Progresso diário */}
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">Progresso Diário</span>
                <span className="text-purple-300">{data.completed.length}/{quests.length}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mt-3">
            Total completado: {data.totalCompleted} quests
          </p>
        </div>

        {/* Lista de Quests */}
        <div className="space-y-3">
          {quests.map((quest) => {
            const isCompleted = data.completed.includes(quest);
            const isAnimating = showAnimation === quest;
            
            return (
              <button
                key={quest}
                onClick={() => toggleQuest(quest)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] border-2 ${
                  isCompleted
                    ? 'bg-gradient-to-r from-emerald-900/50 to-green-900/50 border-emerald-500/50'
                    : 'bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50'
                } ${isAnimating ? 'scale-105' : ''}`}
              >
                <div className="flex items-center gap-4">
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3 className={`font-semibold ${
                      isCompleted ? 'text-emerald-300 line-through' : 'text-white'
                    }`}>
                      {quest}
                    </h3>
                  </div>
                  {isCompleted && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                      +15 XP
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Mensagem de Conclusão */}
        {progress === 100 && (
          <div className="mt-6 bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-2 border-yellow-500/50 rounded-xl p-6 text-center animate-pulse">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-yellow-300 mb-1">
              Todas as Quests Completadas!
            </h3>
            <p className="text-yellow-200/80">
              Continue seu streak voltando amanhã!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestTracker;