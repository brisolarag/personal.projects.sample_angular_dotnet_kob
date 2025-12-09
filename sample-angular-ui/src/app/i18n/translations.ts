export interface Translation {
  sidebar: {
    days: string[];
  };
  content: {
    block: string;
    profile: string;
  };
  nav: {
    workout: string;
    diet: string;
  };
}

export const EN: Translation = {
  sidebar: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  content: { block: 'Content Block', profile: 'Profile' },
  nav: { workout: 'Workout', diet: 'Diet' }
};

export const PT: Translation = {
  sidebar: {
    days: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  },
  content: { block: 'Bloco de Conteúdo', profile: 'Perfil' },
  nav: { workout: 'Treino', diet: 'Dieta' }
};