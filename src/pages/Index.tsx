import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock, Brain, Award, RotateCcw } from 'lucide-react';
import { IQQuestion, generateRandomQuestions, calculateIQ } from '@/utils/iqQuestions';
import VisualQuestion from '@/components/VisualQuestion';

const Index = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'results'>('start');
  const [questions, setQuestions] = useState<IQQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [score, setScore] = useState(0);
  const [iqScore, setIqScore] = useState(0);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      finishTest();
    }
  }, [timeLeft, gameState]);

  const startTest = () => {
    const newQuestions = generateRandomQuestions();
    setQuestions(newQuestions);
    setAnswers(new Array(30).fill(null));
    setCurrentQuestion(0);
    setTimeLeft(1800);
    setGameState('playing');
  };

  const selectAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < 29) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishTest();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishTest = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setIqScore(calculateIQ(correctAnswers));
    setGameState('results');
  };

  const restartTest = () => {
    setGameState('start');
    setCurrentQuestion(0);
    setAnswers([]);
    setScore(0);
    setIqScore(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getIQDescription = (iq: number) => {
    if (iq >= 140) return { level: "Genius", description: "Exceptional intellectual ability", color: "text-purple-600" };
    if (iq >= 130) return { level: "Very Superior", description: "Highly gifted intellectual ability", color: "text-blue-600" };
    if (iq >= 120) return { level: "Superior", description: "Above average intellectual ability", color: "text-green-600" };
    if (iq >= 110) return { level: "High Average", description: "Above average intelligence", color: "text-emerald-600" };
    if (iq >= 90) return { level: "Average", description: "Normal intellectual ability", color: "text-yellow-600" };
    if (iq >= 80) return { level: "Low Average", description: "Below average intelligence", color: "text-orange-600" };
    return { level: "Below Average", description: "Below average intellectual ability", color: "text-red-600" };
  };

  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-white/20 text-white animate-fade-in">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <Brain className="w-16 h-16 text-purple-300 animate-pulse" />
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Professional IQ Test
            </CardTitle>
            <p className="text-xl text-gray-300">
              Discover your intellectual potential with our comprehensive 30-question assessment
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Clock className="w-8 h-8 mx-auto text-blue-300" />
                <h3 className="font-semibold">30 Minutes</h3>
                <p className="text-sm text-gray-400">Complete time limit</p>
              </div>
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Award className="w-8 h-8 mx-auto text-purple-300" />
                <h3 className="font-semibold">30 Questions</h3>
                <p className="text-sm text-gray-400">Carefully crafted challenges</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-semibold text-lg">Test Features:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Visual pattern recognition with animations</li>
                <li>• Logical reasoning and spatial intelligence</li>
                <li>• Mathematical and numerical sequences</li>
                <li>• Randomized questions for fair assessment</li>
              </ul>
            </div>
            <Button 
              onClick={startTest}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              Start IQ Test
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (gameState === 'playing') {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / 30) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-6 flex justify-between items-center text-white animate-fade-in">
            <div className="flex items-center space-x-4">
              <Brain className="w-8 h-8 text-purple-300 animate-pulse" />
              <div>
                <h1 className="text-xl font-bold">IQ Test</h1>
                <p className="text-sm text-gray-300">Question {currentQuestion + 1} of 30</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-5 h-5 text-blue-300" />
              <span className="text-lg font-mono">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Progress value={progress} className="h-3" />
            <p className="text-white text-sm mt-2 text-center">{Math.round(progress)}% Complete</p>
          </div>

          {/* Question */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">{question?.question}</CardTitle>
              {question?.description && (
                <p className="text-gray-300">{question.description}</p>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Updated Visual Question Component with selection */}
              {question?.visual ? (
                <VisualQuestion 
                  question={question} 
                  selectedAnswer={answers[currentQuestion]} 
                  onAnswerSelect={selectAnswer}
                />
              ) : (
                question?.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={answers[currentQuestion] === option ? "default" : "outline"}
                    className={`w-full p-4 text-left justify-start text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                      answers[currentQuestion] === option 
                        ? "bg-purple-600 hover:bg-purple-700 text-white" 
                        : "bg-white/5 hover:bg-white/10 text-white border-white/20"
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    onClick={() => selectAnswer(option)}
                  >
                    <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                ))
              )}
              
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="bg-white/5 hover:bg-white/10 text-white border-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Previous
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQuestion]}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  {currentQuestion === 29 ? 'Finish Test' : 'Next Question'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (gameState === 'results') {
    const iqInfo = getIQDescription(iqScore);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in">
          <CardHeader className="text-center space-y-4">
            <Award className="w-16 h-16 mx-auto text-yellow-400 animate-bounce" />
            <CardTitle className="text-4xl font-bold">Test Complete!</CardTitle>
            <p className="text-xl text-gray-300">Here are your results</p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* IQ Score */}
            <div className="text-center bg-white/5 rounded-lg p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 animate-pulse">
                {iqScore}
              </h2>
              <p className="text-2xl font-semibold mb-2">Your IQ Score</p>
              <p className={`text-xl font-semibold ${iqInfo.color}`}>{iqInfo.level}</p>
              <p className="text-gray-300 mt-2">{iqInfo.description}</p>
            </div>

            {/* Statistics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white/5 rounded-lg p-6 animate-fade-in transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-3xl font-bold text-green-400">{score}</h3>
                <p className="text-sm text-gray-300">Correct Answers</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-6 animate-fade-in transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-3xl font-bold text-blue-400">{30 - score}</h3>
                <p className="text-sm text-gray-300">Incorrect</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-6 animate-fade-in transition-all duration-300 transform hover:scale-105" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-3xl font-bold text-purple-400">{Math.round((score / 30) * 100)}%</h3>
                <p className="text-sm text-gray-300">Accuracy</p>
              </div>
            </div>

            {/* IQ Scale Reference */}
            <div className="bg-white/5 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '1s' }}>
              <h4 className="font-semibold text-lg mb-4">IQ Scale Reference:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>140+</span>
                  <span className="text-purple-400">Genius</span>
                </div>
                <div className="flex justify-between">
                  <span>130-139</span>
                  <span className="text-blue-400">Very Superior</span>
                </div>
                <div className="flex justify-between">
                  <span>120-129</span>
                  <span className="text-green-400">Superior</span>
                </div>
                <div className="flex justify-between">
                  <span>110-119</span>
                  <span className="text-emerald-400">High Average</span>
                </div>
                <div className="flex justify-between">
                  <span>90-109</span>
                  <span className="text-yellow-400">Average</span>
                </div>
                <div className="flex justify-between">
                  <span>80-89</span>
                  <span className="text-orange-400">Low Average</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={restartTest}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: '1.2s' }}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Take Test Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default Index;
