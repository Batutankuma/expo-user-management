import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const Sound: React.FC = () => {
    const [audioRecorderPlayer, setAudioRecorderPlayer] = useState<AudioRecorderPlayer | null>(null);
    const [noiseLevel, setNoiseLevel] = useState<number>(0);

    useEffect(() => {
        const initAudioRecorderPlayer = async () => {
            const player = new AudioRecorderPlayer();
            await player.setSubscriptionDuration(0.1); // Interval de mesure en secondes
            if(setAudioRecorderPlayer){
                setAudioRecorderPlayer(player);
            }
        };

        initAudioRecorderPlayer();

        return () => {
            if (audioRecorderPlayer) {
                audioRecorderPlayer.stopPlayer();
                audioRecorderPlayer.removeRecordBackListener();
            }
        };
    }, [audioRecorderPlayer]);

    const startRecording = async () => {
        if (audioRecorderPlayer) {
            await audioRecorderPlayer.startPlayer();
            audioRecorderPlayer.addPlayBackListener((e: any) => {
                if (e.current_position) {
                    setNoiseLevel(e.current_position)
                }
            })
        }
    };

    const stopRecording = async () => {
        if (audioRecorderPlayer) {
            await audioRecorderPlayer.stopPlayer();
            audioRecorderPlayer.removeRecordBackListener();
        }
    };

    return (
        <View>
            <Text>Noise Level: {noiseLevel}</Text>
            <Button title="Start Recording" onPress={startRecording} />
            <Button title="Stop Recording" onPress={stopRecording} />
        </View>
    );
};

export default Sound;
