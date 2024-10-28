function Work({ country_props }: { country_props: string }) {
    const countries: any = {

        Pakistan: {
            name: 'Pakistan',
            population: '235.8 million ',
            capital: 'Islamabad'
        },

        India: {
            name: 'India',
            population: '1.4 billion',
            capital: 'Dehli'
        },
        Srilanka: {
            name: 'Srilanka',
            population: '144.2 million',
            capital: 'Colombo.'
        },
        Afghanistan: {
            name: 'Afghanistan',
            population: '1.2.55 million',
            capital: 'Kabul'
        },
        Saudia: {
            name: 'Saudia Arabia',
            population: '1.102 billion',
            capital: 'Jaddah'
        }
    }
    const pop = countries[country_props];



    return (
        <div><h1>Country : {pop.name}</h1>
            <h1>Population : {pop.population}</h1>
            <h1>Capital : {pop.capital}</h1>
        </div>



    )
}
export default Work;