import React from 'react';
import { FaRegCircle, FaRegClock, FaRegLightbulb } from 'react-icons/fa'; // Only need these for the icons, not FaArrowRight for this section's buttons

// Placeholder icons, adjust as needed to match your exact icon library
// FaRegCircle (or similar icon for general funding)
// FaRegLightbulb (or similar icon for solar/energy)
// FaRegClock (or similar icon for time/volunteering)

const HelpUsSection = () => {
    // Define the color palette from the Resources page
    const goldColor = '#FFAA4C'; // Orange-gold
    const blueColor = '#22ABDF'; // Bright blue
    const redColor = '#E34444';   // Red

    // Data for the three cards
    const helpOptions = [
        {
            icon: FaRegCircle,
            title: "Join the funding",
            desc: "Be a part of our funding efforts and help us bring about lasting impact in underserved communities. Your contribution plays a crucial role in empowering individuals and fostering sustainable change.",
            buttonText: "Show more",
            isDark: false,
            iconColor: goldColor, // Using blue for light card icons
            buttonBorderColor: blueColor,
            buttonHoverBg: blueColor,
            buttonHoverText: 'text-white'
        },
        {
            icon: FaRegLightbulb,
            title: "Donate for solar panel",
            desc: "Make a donation towards our solar panel initiative and help us bring clean, sustainable energy to communities in need. Your support will directly contribute to powering schools, community centers, and improving lives through renewable energy.",
            buttonText: "Show more",
            isDark: false, // This card is dark
            iconColor: goldColor, // Using gold for dark card icon
            buttonBg: goldColor, // Gold button background for dark card
            buttonTextDark: 'text-gray-900', // Text for the gold button
            buttonHoverBg: blueColor, // Hover to blue
            buttonHoverText: 'text-white'
        },
        {
            icon: FaRegClock,
            title: "Volunteer for refugees",
            desc: "Join us as a volunteer and make a difference in the lives of refugees. By dedicating your time and skills, you can provide support, compassion, and empowerment to those seeking refuge and a fresh start.",
            buttonText: "Show more",
            isDark: false,
            iconColor: goldColor, // Using blue for light card icons
            buttonBorderColor: blueColor,
            buttonHoverBg: blueColor,
            buttonHoverText: 'text-white'
        },
    ];

    return (
        <section className="py-20 bg-white text-gray-900"> {/* Main section background can remain white or light gray */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 flex flex-col justify-center items-center gap-6">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center" style={{ color: blueColor }}>
                        How can you help us
                    </h2>

                    <p className="text-gray-600 text-center max-w-[720px] mx-auto text-[20px] mt-4 leading-[28px]">
                        Every action counts. Find out how you can donate, volunteer, or advocate to support our fight for justice and dignity.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {helpOptions.map((option, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-xl transition-all duration-300 h-full flex flex-col ${option.isDark
                                    ? 'bg-[#141722] text-white shadow-xl' // Dark card styling
                                    : 'bg-gray-50 text-gray-900 shadow-md hover:shadow-lg' // Light card styling
                                }`}
                        >
                            {/* Icon */}
                            <option.icon
                                size={28}
                                style={{ color: option.iconColor }} // Apply dynamic icon color
                                className="mb-6"
                            />

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4">{option.title}</h3>

                            {/* Description */}
                            <p className={`mb-8 flex-grow ${option.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {option.desc}
                            </p>

                            {/* Button */}
                            <button
                                className={`text-sm cursor-pointer font-semibold mt-auto px-4 py-2 rounded-full border transition duration-300 self-start
                                    ${option.isDark
                                        ? `${option.buttonTextDark} border-transparent` // Dark card button with transparent border
                                        : `text-gray-900 border-gray-900` // Light card button with dark border
                                    }
                                    ${option.isDark ? `bg-[${option.buttonBg}]` : ''}
                                    ${option.isDark ? `hover:bg-[${option.buttonHoverBg}] hover:${option.buttonHoverText}` : `hover:bg-[${option.buttonHoverBg}] hover:${option.buttonHoverText}`}
                                    `}
                                // Manually apply style for dynamic colors for now, Tailwind JIT can be tricky with string interpolation inside template literals directly for colors.
                                // For a more robust solution, use Tailwind config or ensure dynamic classes are fully formed strings.
                                style={option.isDark
                                    ? { backgroundColor: option.buttonBg, borderColor: option.buttonBg, color: '#141722' }
                                    : { borderColor: option.buttonBorderColor, color: '#141722' }
                                }
                                onMouseEnter={(e) => {
                                    if (option.isDark) {
                                        e.currentTarget.style.backgroundColor = blueColor;
                                        e.currentTarget.style.borderColor = blueColor;
                                        e.currentTarget.style.color = 'white';
                                    } else {
                                        e.currentTarget.style.backgroundColor = blueColor;
                                        e.currentTarget.style.borderColor = blueColor;
                                        e.currentTarget.style.color = 'white';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (option.isDark) {
                                        e.currentTarget.style.backgroundColor = goldColor;
                                        e.currentTarget.style.borderColor = goldColor;
                                        e.currentTarget.style.color = '#141722';
                                    } else {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = blueColor;
                                        e.currentTarget.style.color = '#141722';
                                    }
                                }}
                            >
                                {option.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpUsSection;