import React from "react"

import Work from "../components/Work"

export default function Country_info({params}:{params:{Countries_data :string}}){
    const country_props  = params.Countries_data; 
 
    return <Work country_props={country_props} />
}