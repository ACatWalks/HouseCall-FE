import NavBar from "./NavBar"

function SymptomForm() {

    const symptoms = []

    const userEmail = sessionStorage.getItem('email')

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:4000/patients/${userEmail}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(symptoms)
        })
    }

    return (
        <main>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <h1>Please check the symptoms you are experiencing</h1>
                <input type="checkbox" id="symptom1" name="symptom1" value="Anal Pain" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom1">Anal Pain</label>
                <input type="checkbox" id="symptom2" name="symptom2" value="Anorexia" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom2">Anorexia</label>
                <input type="checkbox" id="symptom3" name="symptom3" value="Cough" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom3">Cough</label>
                <input type="checkbox" id="symptom4" name="symptom4" value="Chills" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom4">Chills</label>
                <input type="checkbox" id="symptom5" name="symptom5" value="Constipation" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom5">Constipation</label>
                <input type="checkbox" id="symptom6" name="symptom6" value="Diarrhea" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom6">Diarrhea</label>
                <input type="checkbox" id="symptom7" name="symptom7" value="Eczema" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom7">Eczema</label>
                <input type="checkbox" id="symptom8" name="symptom8" value="Fever" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom8">Fever</label>
                <input type="checkbox" id="symptom9" name="symptom9" value="Foot Pain" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom9">Foot Pain</label>
                <input type="checkbox" id="symptom10" name="symptom10" value="Gas" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom10">Gas</label>
                <input type="checkbox" id="symptom11" name="symptom11" value="Halitosis" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom11">Halitosis</label>
                <input type="checkbox" id="symptom12" name="symptom12" value="Indigestion" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom12">Indigestion</label>
                <input type="checkbox" id="symptom13" name="symptom13" value="Low Energy" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom13">Low Energy</label>
                <input type="checkbox" id="symptom14" name="symptom14" value="Mood Swings" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom14">Mood Swings</label>
                <input type="checkbox" id="symptom15" name="symptom15" value="Nerve Pain" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom15">Nerve Pain</label>
                <input type="checkbox" id="symptom16" name="symptom16" value="Pain (general)" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom16">Pain (general)</label>
                <input type="checkbox" id="symptom17" name="symptom17" value="Sneezing" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom17">Sneezing</label>
                <input type="checkbox" id="symptom18" name="symptom18" value="Stomachache" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom18">Stomachache</label>
                <input type="checkbox" id="symptom19" name="symptom19" value="Tonsillitis" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom19">Tonsillitis</label>
                <input type="checkbox" id="symptom20" name="symptom20" value="Vomiting" onChange={e => symptoms.push(e.target.value)} />
                <label htmlFor="symptom20">Vomiting</label>
                <input type="submit" value="Submit Symptoms" className="form-btn" />
            </form>
        </main>
    )
}

    

export default SymptomForm