export const Questions = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,

  // tradingExperience: '',
  // averageRiskPerTrade: '',
  // isFundedByPropTradingFirm: '',
  // primaryFinancialMarkets: '',
  // tradingStyle: ''
  questions: [
    {
      question: 'What’s your level of experience with trading?',
      choices: ['Beginner', 'Intermediate', 'Advanced', 'Professional/Expert'],
      answerKeys: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'PROFESSION_EXPERT'],
      type: 'tradingExperience',
      correctAnswer: 'Beginner'
    },
    {
      question: 'What is your average risk per trade?',
      choices: ['Less than 1%', 'More than 1% but less than 5%', 'More than 1% but more than 5%', 'More than 10%'],
      answerKeys: ['LESS_THAN_1', 'MORE_THAN_1_LESS_THAN_5', 'MORE_THAN_1_MORE_THAN_5', 'MORE_THAN_10'],
      type: 'averageRiskPerTrade',
      correctAnswer: 'Less than 1%'
    },
    {
      question: 'Have you ever been funded by a prop trading firm?',
      choices: ['Yes', 'No'],
      answerKeys: ['true', 'false'],
      type: 'isFundedByPropTradingFirm',
      correctAnswer: 'Yes'
    },
    {
      question: 'Which financial markets do you primarily trade in?',
      choices: ['Stock Market', 'Forex', 'Cryptocurrency', 'Other'],
      answerKeys: ['STOCK_MARKET', 'FOREX', 'CRYPTOCURRENCY', 'OTHER'],
      type: 'primaryFinancialMarkets',
      correctAnswer: 'Stock Market'
    },
    {
      question: 'Which option best describes your trading style?',
      choices: ['Scalp Trading', 'Day Trading', 'Swing Trading', 'Other'],
      answerKeys: ['SCALP_TRADING', 'DAY_TRADING', 'SWING_TRADING', 'OTHER'],
      type: 'tradingStyle',
      correctAnswer: 'Scalp Trading'
    }
  ]
};
