import NavBar from "./NavBar"

function SymptomForm() {

    const symptoms = []

    const userEmail = sessionStorage.getItem('email')

    async function handleSubmit(e) {
        e.preventDefault()
        let inputs = document.querySelectorAll('.sym')
        for(let i=0; i<inputs.length; i++){
            if(inputs[i].checked === true){
                symptoms.push(inputs[i].value)
            } else if(symptoms.includes(inputs[i].value)){
                symptoms.splice(symptoms.indexOf(inputs[i].value), 1)
            }
        }
        let uniqueSymptoms = [...new Set(symptoms)]
        await fetch(`http://localhost:4000/patients/${userEmail}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uniqueSymptoms)
        })
        console.log(uniqueSymptoms)
    }

    return (
        <main>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <h1>Please check the symptoms you are experiencing</h1>
                <div className='row'>
                <input type="checkbox" id="symptom1" name="symptom1" value="Anal Pain" className="sym" />
                <label htmlFor="symptom1">Anal Pain</label>
                <input type="checkbox" id="symptom2" name="symptom2" value="Anorexia" className="sym" />
                <label htmlFor="symptom2">Anorexia</label>
                <input type="checkbox" id="symptom3" name="symptom3" value="Cough" className="sym" />
                <label htmlFor="symptom3">Cough</label>
                <input type="checkbox" id="symptom4" name="symptom4" value="Chills" className="sym" />
                <label htmlFor="symptom4">Chills</label>
                <input type="checkbox" id="symptom5" name="symptom5" value="Constipation" className="sym" />
                <label htmlFor="symptom5">Constipation</label>
                </div>
                <div className='row'>
                <input type="checkbox" id="symptom6" name="symptom6" value="Diarrhea" className="sym" />
                <label htmlFor="symptom6">Diarrhea</label>
                <input type="checkbox" id="symptom7" name="symptom7" value="Eczema" className="sym" />
                <label htmlFor="symptom7">Eczema</label>
                <input type="checkbox" id="symptom8" name="symptom8" value="Fever" className="sym" />
                <label htmlFor="symptom8">Fever</label>
                <input type="checkbox" id="symptom9" name="symptom9" value="Foot Pain" className="sym" />
                <label htmlFor="symptom9">Foot Pain</label>
                <input type="checkbox" id="symptom10" name="symptom10" value="Gas" className="sym" />
                <label htmlFor="symptom10">Gas</label>
                </div>
                <div className='row'>
                <input type="checkbox" id="symptom11" name="symptom11" value="Halitosis" className="sym" />
                <label htmlFor="symptom11">Halitosis</label>
                <input type="checkbox" id="symptom12" name="symptom12" value="Indigestion" className="sym" />
                <label htmlFor="symptom12">Indigestion</label>
                <input type="checkbox" id="symptom13" name="symptom13" value="Low Energy" className="sym" />
                <label htmlFor="symptom13">Low Energy</label>
                <input type="checkbox" id="symptom14" name="symptom14" value="Mood Swings" className="sym" />
                <label htmlFor="symptom14">Mood Swings</label>
                <input type="checkbox" id="symptom15" name="symptom15" value="Nerve Pain" className="sym" />
                <label htmlFor="symptom15">Nerve Pain</label>
                </div>
                <div className='row'>
                <input type="checkbox" id="symptom16" name="symptom16" value="Pain (general)" className="sym" />
                <label htmlFor="symptom16">Pain (general)</label>
                <input type="checkbox" id="symptom17" name="symptom17" value="Sneezing" className="sym" />
                <label htmlFor="symptom17">Sneezing</label>
                <input type="checkbox" id="symptom18" name="symptom18" value="Stomachache" className="sym" />
                <label htmlFor="symptom18">Stomachache</label>
                <input type="checkbox" id="symptom19" name="symptom19" value="Tonsillitis" className="sym" />
                <label htmlFor="symptom19">Tonsillitis</label>
                <input type="checkbox" id="symptom20" name="symptom20" value="Vomiting" className="sym" />
                <label htmlFor="symptom20">Vomiting</label>
                </div>
                <div className='row'>
                <input type="submit" value="Submit Symptoms" className="form-btn" />
                </div>
            </form>
        </main>
    )
}

    

export default SymptomForm