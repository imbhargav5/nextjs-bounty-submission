import React from 'react'

const Companies = () => {
    const logos = [
        {
            name: 'Airbnb',
            url: '/images/airbnb.png',
        },
        {
            name: 'Google',
            url: '/images/google.png',
        },
        {
            name: 'Microsoft',
            url: '/images/microsoft.png',
        },
        {
            name: 'Spotify',
            url: '/images/spotify.png',
        },
        {
            name: 'Mailchimp',
            url: '/images/mailchimp.png',
        },
        {
            name: 'Mashable',
            url: '/images/mashable.png',
        },
    ]

    return (
        < div className="companies flex flex-col gap-4 justify-center items-center" >
            <div className="heading text-2xl font-semibold text-gray-500">Trusted by 150+ companies</div>

            {/* syntaxui */}
            <div className="w-[90%] mx-12">
                <div className="mx-auto w-full px-4 md:px-8">
                    <div
                        className="group relative mt-6 flex gap-12 overflow-hidden p-2"
                        style={{
                            maskImage:
                                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                        }}
                    >
                        {Array(5)
                            .fill(null)
                            .map((index) => (
                                <div
                                    key={index}
                                    className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-12"
                                >
                                    {logos.map((logo, key) => (
                                        <img
                                            key={key}
                                            src={logo.url}
                                            className="h-8 w-36 px-2 brightness-0  dark:invert"
                                            alt={`${logo.name}`}
                                        />
                                    ))}
                                </div>
                            ))}
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Companies
