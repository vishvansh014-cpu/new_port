import React from 'react'

const contact = () => {
    return (
        <div>

            <form className="flex flex-col gap-4 max-w-md mx-auto mt-8">

                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded bg-gray-800"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded bg-gray-800"
                />

                <textarea
                    placeholder="Your Message"
                    className="p-3 rounded bg-gray-800"
                ></textarea>

                <button className="bg-green-500 py-2 rounded">
                    Send Message
                </button>

            </form>
        </div>
    )
}

export default contact