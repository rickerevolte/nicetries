<template> 
  <VCardLayout v-for="(element, index) in muppets"
              :person="element.person" 
              :image="element.image" 
              :role="element.role" 
              :intro="element.intro" 
              :link="element.link"
              :key="index"/>
</template>

<script>
import VCardLayout from "./VCardLayout.vue";

export default {
  components: {
    VCardLayout
},
data: function() {
    return {
      muppets: [
          { person:"Kermit",
            role:"the Frog",
            image:"https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg",
            intro:"Henson's alter-ego",
            // intro:`Henson's alter\-ego`,
            link:"https://www.google.com"
          },
          { person:"Fozzie",
            role:"Bear",
            image:"https://upload.wikimedia.org/wikipedia/en/5/51/Fozzie_Bear.jpg",
            intro:"Just wants to be a great comedian",
            more:"info",
            link:"https://www.google.com"
          },
          { person:"Miss",
            role:"Piggy!",
            intro:"Destined for stardom",
            image:"https://upload.wikimedia.org/wikipedia/en/2/22/MissPiggy.jpg",
            more:"info",
            link:"https://www.google.com"
          },
          {
            person:"Gonzo",
            role:"the Great!",
            intro:"performance artist, stunt double and daredevil",
            image:"https://upload.wikimedia.org/wikipedia/en/0/0a/Gonzo_the_Great.jpg",
            more:"info",
            link:"https://www.google.com"
          },
          {
            person:"Rizzo",
            role:"the Rat",
            intro:"Scene-stealing background figure",
            image:"https://static.wikia.nocookie.net/muppet/images/1/14/Rizzo11.png",
            more:"info",
            link:"https://www.google.com"
          },
      ],
    }
  }
};
</script>

<style scoped>

</style>
