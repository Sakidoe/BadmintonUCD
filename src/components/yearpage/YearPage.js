import * as React from 'react'
import './yearpage.css'
import { StaticImage } from 'gatsby-plugin-image'
const YearPage = () => {
  return (
    <div class="timeline">
        <main>
<div className="timeline-container">
  <h1>Welcome to a recap of the 2023 - 2024 Year!</h1>
  <section>
    <div class="testdiv">
      <h2>20 - 24 September</h2>
      <h2 class="second-date">27 September</h2>
    </div>
    <div class="grid-wrapper">
      <article>
        <h3>UC Davis Recfest</h3>
        <p>The officer Team went out and represented our club in the annual UCD Rec Fest!</p>
      </article>
      <article>
        <h3>Day 1</h3>
        <p>Place image here</p>
      </article>
      <article>
        <h3>Day 2</h3>
        <p>Place image here</p>
      </article>
      <article>
        <h3>poster</h3>
        <p>put poster here </p>
        <StaticImage
            src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
            className="who-we-are-photo"
        />

      </article>
      <article>
        <h3>First Day of Practice!</h3>
        <p>It was our very first practice! Like always, week 0 is free for all. </p>
      </article>
      <article>
        <h3>15:30 AM</h3>
        <p>I gave it a cold? I gave it a virus. A computer virus. </p>
      </article>
      <article>
        <h3>16:30 AM</h3>
        <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. </p>
      </article>
      <article>
        <h3>17:30 AM</h3>
        <p>What do they got in there? King Kong?  </p>
        <StaticImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
            className="who-we-are-photo"
        />

      </article>
    </div>
  </section>
  <section>
    <h2>21 October</h2>
    <div class="grid-wrapper">
      <article>
                             <h3>UCD X SJSU X UCSC Trimeet </h3>
        <p>Life finds a way. You know what? It is beets. </p>
      </article>
      <article>
        <h3>10:00 AM</h3>
        <p>I've crashed into a beet truck </p>
      </article>
      <article>
        <h3>12:30 AM</h3>
        <p>I was part of something special. </p>
      </article>
      <article>
        <h3>13:30 AM</h3>
        <p>Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. </p>
        <StaticImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
            className="who-we-are-photo"
        />
      </article>
      <article>
        <h3>14:30 AM</h3>
        <p>Just my luck, no ice. God help us, we're in the hands of engineers. </p>
      </article>
      <article>
        <h3>15:30 AM</h3>
        <p>I gave it a cold? I gave it a virus. A computer virus. </p>
      </article>
      <article>
        <h3>16:30 AM</h3>
        <p>God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. </p>
      </article>
      <article>
        <h3>17:30 AM</h3>
        <p>What do they got in there? King Kong?  </p>
        <StaticImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
            className="who-we-are-photo"
        />
      </article>
    </div>
  </section>
    </div>
    </main>
    </div>
  )
}

export default YearPage