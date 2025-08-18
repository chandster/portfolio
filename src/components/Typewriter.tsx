import TypewriterEffect from 'typewriter-effect';

const Typewriter = () => {
    return (
        <TypewriterEffect
            options={{
                strings: ['Software Engineer', 'Student', 'Web Developer', 'Destroyer of Bugs'],
                autoStart: true,
                loop: true,
            }}
        />
    );
};

export default Typewriter;