import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import {useEffect, useState} from 'react';
import {Audio} from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MusicPlayerScreen() {
    const [musicFiles, setMusicFiles] = useState([])
    const [playing, setPlaying] = useState(-1)
    const [sound, setSound] = useState(null);
    const [progressDuration, setProgressDuration] = useState(0)
    const fetchMusicFiles = async () => {
        const permission = await MediaLibrary.requestPermissionsAsync(

        );
        const media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio,
        });
        setMusicFiles(media.assets)
    }
    const playMusic = async (fileUri) => {
        const {sound} = await Audio.Sound.createAsync({
            uri: fileUri,
        });
        setSound(sound);
        await sound.playAsync();
    }

    const pauseMusic = async () => {
        await sound.pauseAsync();
    }
    useEffect(() => {
        if (!sound) {
            return;
        }
        sound.setOnPlaybackStatusUpdate(
            async (status) => {
                if (status.didJustFinish) {
                    setPlaying(-1)
                    await sound.unloadAsync();
                    console.log("finished")
                    setSound(null);
                } else {
                    setProgressDuration(status.positionMillis / 1000)
                }
            }
        );
    }, [sound])
    useEffect(() => {
            fetchMusicFiles()
        }
        , [])
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    Ваш плейлист
                </Text>
            </View>

            <View style={styles.list}>

                {musicFiles.map((file, index) => {

                    return (
                        <View key={index}>

                            <TouchableOpacity onPress={
                                playing !== index ?
                                    () => {
                                        playMusic(file.uri)
                                        setPlaying(index)
                                    } :
                                    () => {
                                        pauseMusic()
                                        setPlaying(-1)
                                    }
                            } style={styles.playButton}>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                    <Ionicons
                                        name={playing !== index ?
                                            "play" :
                                            "pause"}
                                        size={30}
                                        color="white">
                                        <View>
                                            <Text
                                                style={styles.fileName}>
                                                {file.filename}
                                            </Text>
                                        </View>

                                    </Ionicons>
                                </View>
                                {/* progress duration if index == currentIndex*/}
                                <View style={styles.row}>

                                    {playing === index ?
                                        <Text style={styles.fileName}>
                                            {progressDuration} / {file.duration}
                                        </Text> :
                                        <></>
                                    }
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    container: {
        backgroundColor: "#fff",
        height: "100%",
        marginTop: 50,
    },
    headingContainer: {
        backgroundColor: "#044244"
    },
    heading: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    },
    list: {
        marginTop: 10,
        flex: 1,
        flexDirection: "column",
    },
    fileName: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
    },
    playButton: {
        backgroundColor: "rgba(4,66,68,0.78)",
        borderRadius: 20,
        padding: 20,
        margin: 10,
    },
});
