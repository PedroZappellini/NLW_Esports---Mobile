import React, { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import logoImg from "../../assets/logo-nlw-esports.png";
import Heading from "../../components/Heading";
import GameCard, { GameCardProps } from "../../components/GameCard";
import styles from "./styles";
import Background from "../../components/Background";

function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("Game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch("http://192.168.15.105:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={games}
          contentContainerStyle={styles.contentList}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => {
                handleOpenGame(item);
              }}
            />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}

export default Home;
