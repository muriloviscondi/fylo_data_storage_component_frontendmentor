import React from 'react';
import { View, Text, Label, Image, ImageBackground } from 'react-native';
import InputRange from 'react-input-range';

import bgImage from './../assets/bg-mobile.png';
import logo from './../assets/logo.png';
import documentIcon from './../assets/icon-document.png';
import folderIcon from './../assets/icon-folder.png';
import uploadIcon from './../assets/icon-upload.png';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.imageBackground} alt='background image'>
        <View style={styles.content}>

          <View style={styles.contentArquives}>
            <Image source={logo} />
            <View style={styles.Icons}>
              <View style={styles.contentIcons}>
                <Image source={documentIcon} alt="icon document" />
              </View>
              <View style={styles.contentIcons}>
                <Image source={folderIcon} alt="icon folder" />
              </View>
              <View style={styles.contentIcons}>
                <Image source={uploadIcon} alt="icon icon-upload" />
              </View>
            </View>
          </View>

          <View style={styles.contentDataStorage}>
            <Text>You've used</Text>
            <Text>815 gb</Text>
            <Text>of your storage</Text>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};