<template>

  <div class="container">
    <img :src= "image" alt="Image Description">

    <div class="shipName">
      <h2>{{ name }}</h2>
    </div>

    <div class="desc">
      <p>Price: {{ price }}</p>
      <p>Departure: {{ departure }}</p> 
      <p>Arrival: {{ arrival }}</p>    
      <p>{{ DayofWeek }}</p>
      
    </div>      

  </div>
</template>

<script>
export default{
  props: {
      name: String,
      price: Number,
      departure: Date,
      arrival: Date,
      DayofWeek: {
        type: String,
        validator: (value) => {
          const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          return validDays.includes(value);
        }
      },
      image: String
  }
}
</script>

<style scoped>
    .container{
    color: rgb(73, 73, 73);
    font-family:sans-serif;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 8px #888888;
    margin: 0px 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .shipName{
    margin: 20px;
  }
  .shipName h2{
    margin: 0px;
  }

  .desc{
    display: flex;
    margin: 0px 30px;

  }
  .desc p{
    margin-right: 30px;
  }

  .container img{
    max-width: 100%;
    height: 400px;
    object-fit: cover;
  }
</style>