<template>
  <div class="demo-tts">
    <div class="demo-tts__title"><span>Demo TTS</span></div>
    <div class="demo-tts__content">
      <div class="demo-tts__block__content" id="content">
        <p v-text="CONTENT"></p>
      </div>      
    </div>
    <div class="demo-tts__block itri">
      <div class="demo-tts__block__title"><span v-text="ITRI"></span></div>
      <div class="vocal"><span @click="play('TW_LIT_AKoan')">Taiwanese 1</span></div>
      <div class="vocal"><span @click="play('TW_SPK_AKoan')">Taiwanese 2</span></div>
      <div class="vocal"><span @click="play('Angela')">Girl</span></div>
      <div class="vocal"><span @click="play('MCHEN_Bruce')">Bruce Mix</span></div>
      <div class="vocal"><span @click="play('MCHEN_Joddess')">Joddess Mix</span></div>
      <div class="vocal"><span @click="play('MCHEN_Theresa')">Theresa Mix</span></div>      
      <div id="media"></div>
    </div>
    <div class="demo-tts__block cyberon">
      <div class="demo-tts__block__title"><span v-text="CYBERON"></span></div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), DaiYu(female)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source :src="cyberSrc('zh-TW', 'DaiYu', 'DaiYu', 1.3)" type="audio/mpeg">
        </audio>  
      </div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), YouKan(male)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source :src="cyberSrc('zh-TW', 'YouKan', 'YouKan', 1.3)" type="audio/mpeg">
        </audio>  
      </div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), ZhiFen(female)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source :src="cyberSrc('zh-TW', 'ZhiFen', 'DaiYu', 1.3)" type="audio/mpeg">
        </audio>  
      </div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), YiChuen(female)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source :src="cyberSrc('zh-TW', 'YiChuen', 'DaiYu',1.3)" type="audio/mpeg">
        </audio>  
      </div>
      <div class="vocal">
        <span>English (United States), Zero(female)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source :src="cyberSrc('en-US', 'Zero', undefined)" type="audio/mpeg">
        </audio>  
      </div>
      <div class="vocal">
        <span>Taiwanese, YiChuen(female)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source :src="cyberSrc('zh-NAN', 'YiChuen', 'DaiYu',1.3)" type="audio/mpeg">
        </audio>  
      </div>
    </div>
    <div class="demo-tts__block itri">
      <div class="demo-tts__block__title"><span v-text="MS"></span></div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), Yating(female)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source src="https://www.readr.tw/assets/audio/voices/Yating.wav" type="audio/wav">
        </audio>  
      </div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), HanHanRUS(female)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source src="https://www.readr.tw/assets/audio/voices/HanHanRUS.wav" type="audio/wav">
        </audio>  
      </div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), Zhiwei(male)</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source src="https://www.readr.tw/assets/audio/voices/Zhiwei.wav" type="audio/wav">
        </audio>  
      </div>
      <div class="vocal">
        <span>Traditional Chinese (Taiwan), Zhiwei(male) 1800 words</span><br>
        <audio ref="audio" preload="metadata" controls timeupdate="false">
          <source src="https://www.readr.tw/assets/audio/voices/Zhiwei1800.wav" type="audio/wav">
        </audio>  
      </div>
    </div>
  </div>
</template>
<script>
  // import axios from 'axios'
  import { CONTENT, CYBERON, ITRI, MS } from '../constants'
  // import { google } from 'googleapis'
  //https://vois3.cyberon.com.tw/cloud_tts/gen_tts_content.php

  // const CLIENT_ID = '983956931553-rbhe58l5gebmv6mqjdo8b8vl3eer5k2e.apps.googleusercontent.com'
  export default {
    name: 'DemoTTS',
    data () {
      return {
        CONTENT,
        CYBERON,
        ITRI,
        MS,
        tts: {}
      }
    },
    methods: {
      play (vocal = 'Bruce') {
        this.tts.ConvertCustom('id:content', 'media', vocal, '100', '4', '0', '0', '10')
      },
      playMS () {
        return
      },
      cyberSrc (lang, vocal, subVocal = 'Zero', speed = 1) {
        return `https://vois3.cyberon.com.tw/cloud_tts/gen_tts_content.php?text=${CONTENT}&speaker=${vocal}&language=${lang}&speed=${speed}&esl_speaker=${subVocal}&esl_speed=1.7&punctuDuration={"，":0.2,"。":0.8}`
      }
    },
    mounted () {
      window.console.log('DemoTTS mounted!')
      this.tts = new window.TTS()
      this.tts.muteTag = 'id:mute|class:mute'
      this.tts.PlayerSet.hidden = false
      this.tts.PlayerSet.width = 100 
      this.tts.PlayerSet.height = 30


    },
  }
</script>
<style lang="stylus" scoped>
  .vocal
    cursor pointer
  .demo-tts
    &__content
      padding 50px
    &__block
      margin-bottom 20px
      &__title
        margin 20px 0
        font-weight bold
      padding 20px
      background-color #e3e3e3
</style>