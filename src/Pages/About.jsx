/* eslint-disable react/no-unescaped-entities */
function About() {
    return (
        <div className="about">
            <img src="src/assets/black.svg" height={100}/>
            <p>Get ready for a "pan-tastic" journey! This app isn't just for managing and creating recipes, it's your culinary playground. Think of it as your own personal cooking diary where you can add your photos and recipes, turning every dish into a masterpiece or a disaster... but hey, we won't judge! Let's dive in and unleash your inner chef!</p>
            <section className="authors">
            <p>Developed by:</p>
            <p>Filipe Vieira</p>
            <p><a href="https://www.linkedin.com/in/filipe-santiago-956a4218a/">LinkedIn </a>
            <a href="https://github.com/KYD-42"> GitHub</a>
            </p>
            <p>And João Gonçalves</p>
            <p><a href="https://www.linkedin.com/in/joao-gon%C3%A7alves-807800196/">LinkedIn </a>
            <a href="https://github.com/JoaoGoncalves25"> GitHub</a>
            </p>
            </section>
        </div>
    );
}

export default About;