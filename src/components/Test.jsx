import React from 'react'

const Test = () => {
    const skillsData = [
        {
            id: 1,
            name: "Habilidad 1",
            image: "imagen1.jpg",
        },
        {
            id: 2,
            name: "Habilidad 2",
            image: "imagen2.jpg",
        },
        {
            id: 3,
            name: "Habilidad 3",
            image: "imagen3.jpg",
        },
        // Agrega más habilidades según sea necesario
    ];

    return (
        <div className="skill-sphere-container">
            {skillsData.map((skill) => (
                <div key={skill.id} className="skill-sphere">
                    <img
                        src="data:image/png;base64,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"
                        alt=""
                    />
                    <p>Esfera</p>
                </div>
            ))}
        </div>
    )
}

export default Test
