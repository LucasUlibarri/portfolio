import Layout from '../components/Layout'
import photography from '../data/photography.json'
import experiments from '../data/experiments.json'

function Play(){
    return(
        <Layout>

            {/* Hero */}
            <section>
                <h1>Play</h1>
                <p>I started taking photos with an analog camera recently and I'm learning in the process.
                    Here are some of the photos I've taken and developed.
                </p>
            </section>

            {/* Photography */}
            <section className='photography'>
                    {photography.map(photo => (
                        <img
                            key={photo.id}
                            src={photo.src}
                            alt={photo.alt}
                        />
                    ))}
            </section>

            {/* Experiments */}
            <section>
                <div className='section-intro'>
                    <h2>Experiments</h2>
                     <p>I use platforms like CodePen to test layouts, animations and UI interactions.</p>
                </div>

                <div className="experiments">
                {experiments.map(({ id, url, image, alt, title }) => (
                    <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={image} alt={alt} loading="lazy" />
                    <h4>{title}</h4>
                    </a>
                ))}
                </div>
            </section>
        </Layout>
    )
}

export default Play