import React, { useState } from 'react'

const App = () => {
    const [color, setColor] = useState('black')

    return (
        <div
            className="w-full h-screen flex items-center justify-center transition-colors duration-500"
            style={{ backgroundColor: color }}
        >
            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-[90%] max-w-md text-center">

                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Color Changer
                </h1>

                <p className="text-gray-500 mb-6">
                    Choose a color to change the background
                </p>

                <div className="flex flex-wrap justify-center gap-3">

                    <button
                        onClick={() => setColor('red')}
                        className="px-5 py-2.5 bg-red-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                        Red
                    </button>

                    <button
                        onClick={() => setColor('green')}
                        className="px-5 py-2.5 bg-green-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                        Green
                    </button>

                    <button
                        onClick={() => setColor('purple')}
                        className="px-5 py-2.5 bg-purple-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                        Purple
                    </button>

                    <button
                        onClick={() => setColor('orange')}
                        className="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                        Orange
                    </button>

                    <button
                        onClick={() => setColor('pink')}
                        className="px-5 py-2.5 bg-pink-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                        Pink
                    </button>

                    <button
                        onClick={() => setColor('teal')}
                        className="px-5 py-2.5 bg-teal-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                        Teal
                    </button>

                    <button
                        onClick={() => setColor('indigo')}
                        className="px-5 py-2.5 bg-indigo-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                    >
                        Indigo
                    </button>

                </div>

                <div className="mt-6 text-sm text-gray-500">
                    Current Color:{' '}
                    <span className="font-bold capitalize">{color}</span>
                </div>

            </div>
        </div>
    )
}

export default App

