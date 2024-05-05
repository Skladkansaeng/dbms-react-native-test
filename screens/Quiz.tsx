import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  StyleSheet,
  
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomRadioButton from "../components/CustomRadioButton";
import { Question, getQuestions } from "../services/questions";

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<
    Array<{ questionId: string; answer: string }>
  >([]);
  const scrollRef = useRef(null);

  const shuffleArray = (array: any[]) => {
    for (
      let currentIndex = array.length - 1;
      currentIndex > 0;
      currentIndex--
    ) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }
    return array;
  };

  const loadQuestions = async () => {
    const fetchedQuestions = await getQuestions();
    setQuestions(
      shuffleArray(fetchedQuestions).map((question) => ({
        ...question,
        answers: shuffleArray(question.answers)
      }))
    );
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  if (!questions.length) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollRef}>
        {questions.map(({ question, answers, uuid }, questionIdx) => {
          return (
            <View style={styles.questionContainer} key={uuid}>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 8
                }}
              >
                {question}
              </Text>
              <View style={styles.answer}>
                {answers.map((answer, index) => (
                  <CustomRadioButton
                    key={index}
                    label={answer}
                    selected={
                      selectedAnswer.find(
                        ({ questionId }) => questionId === uuid
                      )?.answer === answer
                    }
                    onSelect={() => {
                      const _answer = selectedAnswer.find(
                        ({ questionId }) => questionId === uuid
                      );
                      if (_answer) {
                        _answer.answer = answer;
                        setSelectedAnswer([...selectedAnswer]);
                      } else {
                        setSelectedAnswer([
                          ...selectedAnswer,
                          {
                            questionId: uuid,
                            answer: answer
                          }
                        ]);
                      }
                    }}
                  />
                ))}
              </View>
            </View>
          );
        })}
        <View
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "90%"
          }}
        >
          <CustomRadioButton
            label={"Submit"}
            disabled={selectedAnswer.length !== questions.length}
            selected={true}
            onSelect={() => {
              const score = selectedAnswer.reduce(
                (acc, { questionId, answer }) => {
                  const { correctAnswer } =
                    questions.find(({ uuid }) => uuid === questionId) || {};
                  if (correctAnswer === answer) acc += 1;
                  return acc;
                },
                0
              );
              // Alert.alert(score.toString());
              Alert.prompt(
                "Enter Your Name",
                `Your Score is ${score}. \nPlease enter your name:`,
                async (name) => {
                  if (!name) Alert.alert("Error", "Please Enter Your Name.");
                  else {
                    const leaderBoard =
                      (await AsyncStorage.getItem("leaderBoard")) ?? "[]";
                    await AsyncStorage.setItem(
                      "leaderBoard",
                      JSON.stringify([
                        ...JSON.parse(leaderBoard),
                        { name, score }
                      ])
                    );
                    setSelectedAnswer([]);
                    loadQuestions();
                    (scrollRef.current as any)?.scrollTo({
                      y: 0,
                      animated: true
                    });
                  }
                },
                "plain-text"
              );
            }}
            textStyles={{ justifyContent: "center" }}
            textFontSize={20}
            fontWeight="bold"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3"
  },
  answer: {
    alignItems: "flex-start"
  },
  question: {
    fontSize: 20,
    marginBottom: 20
  },
  questionContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFF",
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    width: "90%"
  }
});

export default Quiz;
