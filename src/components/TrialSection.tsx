'use client'
import { useState } from 'react'

const GRADES = ['Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10']
const CURRICULA = ['IB','British','American']

export default function TrialSection() {
  const [step, setStep] = useState(1)
  const [grades, setGrades] = useState<string[]>(['Grade 5','Grade 7'])
  const [curric, setCurric] = useState('IB')
  const [form, setForm] = useState({ school: '', name: '', role: 'Head of Admissions', email: '', country: 'United Arab Emirates' })
  const [decided, setDecided] = useState(false)
  const [counter, setCounter] = useState(10)

  const toggleGrade = (g: string) => setGrades(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g])

  const advance = (n: number) => {
    setStep(n)
    if (n === 3) {
      setTimeout(() => {
        document.querySelectorAll('.bar-fill').forEach((el, i) => {
          (el as HTMLElement).style.width = ['76%','68%','91%','80%'][i]
        })
      }, 100)
    }
    if (n === 4) {
      let c = 10
      const iv = setInterval(() => { c--; setCounter(c); if (c <= 7) clearInterval(iv) }, 400)
    }
  }

  const prog = ((step - 1) / 3) * 100

  return (
    <section id="trial" className="bg-blue-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold text-brand-mid mb-4">
            START YOUR FREE TRIAL
          </div>
          <h2 className="text-3xl font-black text-navy tracking-tight mb-2">Get your 10 free reports</h2>
          <p className="text-gray-500 text-sm mb-4">Set up in minutes. Use with real applicants. No commitment.</p>
          <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 rounded-full px-5 py-2 text-sm font-semibold text-brand">
            <span className="text-2xl font-black text-brand">{counter}</span> trial reports remaining
          </div>
        </div>

        {/* Step indicators */}
        <div className="relative flex mb-6">
          <div className="absolute top-5 left-6 right-6 h-0.5 bg-blue-100" style={{background: `linear-gradient(90deg, #002ec1 ${prog}%, #dbeafe ${prog}%)`}} />
          {['Your school','Setup','Preview','Live'].map((label, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 z-10 transition-all ${
                i + 1 < step ? 'bg-green-500 border-green-500 text-white' :
                i + 1 === step ? 'bg-brand border-brand text-white' :
                'bg-white border-gray-200 text-gray-400'
              }`}>
                {i + 1 < step ? '✓' : i + 1}
              </div>
              <div className={`text-xs font-semibold mt-2 ${i + 1 === step ? 'text-brand' : i + 1 < step ? 'text-green-600' : 'text-gray-400'}`}>{label}</div>
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-7">
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-navy mb-1">Tell us about your school</h3>
              <p className="text-sm text-gray-500 mb-5">We'll configure everything for your curriculum and grade levels.</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-gray-500">School name</label><input value={form.school} onChange={e => setForm(f => ({...f, school: e.target.value}))} placeholder="e.g. Evalent Academy" className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand" /></div>
                <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-gray-500">Your name</label><input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} placeholder="e.g. Sarah Ahmed" className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand" /></div>
                <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-gray-500">Role</label><select value={form.role} onChange={e => setForm(f => ({...f, role: e.target.value}))} className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand"><option>Head of Admissions</option><option>Deputy Principal</option><option>Head of School</option></select></div>
                <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-gray-500">Work email</label><input value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="sarah@school.ae" className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand" /></div>
                <div className="col-span-2 flex flex-col gap-1"><label className="text-xs font-semibold text-gray-500">Country</label><select className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand">
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
              <option>Andorra</option>
              <option>Angola</option>
              <option>Antigua and Barbuda</option>
              <option>Argentina</option>
              <option>Armenia</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Azerbaijan</option>
              <option>Bahamas</option>
              <option>Bahrain</option>
              <option>Bangladesh</option>
              <option>Barbados</option>
              <option>Belarus</option>
              <option>Belgium</option>
              <option>Belize</option>
              <option>Benin</option>
              <option>Bhutan</option>
              <option>Bolivia</option>
              <option>Bosnia and Herzegovina</option>
              <option>Botswana</option>
              <option>Brazil</option>
              <option>Brunei</option>
              <option>Bulgaria</option>
              <option>Burkina Faso</option>
              <option>Burundi</option>
              <option>Cabo Verde</option>
              <option>Cambodia</option>
              <option>Cameroon</option>
              <option>Canada</option>
              <option>Central African Republic</option>
              <option>Chad</option>
              <option>Chile</option>
              <option>China</option>
              <option>Colombia</option>
              <option>Comoros</option>
              <option>Congo</option>
              <option>Costa Rica</option>
              <option>Croatia</option>
              <option>Cuba</option>
              <option>Cyprus</option>
              <option>Czech Republic</option>
              <option>Denmark</option>
              <option>Djibouti</option>
              <option>Dominica</option>
              <option>Dominican Republic</option>
              <option>Ecuador</option>
              <option>Egypt</option>
              <option>El Salvador</option>
              <option>Equatorial Guinea</option>
              <option>Eritrea</option>
              <option>Estonia</option>
              <option>Eswatini</option>
              <option>Ethiopia</option>
              <option>Fiji</option>
              <option>Finland</option>
              <option>France</option>
              <option>Gabon</option>
              <option>Gambia</option>
              <option>Georgia</option>
              <option>Germany</option>
              <option>Ghana</option>
              <option>Greece</option>
              <option>Grenada</option>
              <option>Guatemala</option>
              <option>Guinea</option>
              <option>Guinea-Bissau</option>
              <option>Guyana</option>
              <option>Haiti</option>
              <option>Honduras</option>
              <option>Hungary</option>
              <option>Iceland</option>
              <option>India</option>
              <option>Indonesia</option>
              <option>Iran</option>
              <option>Iraq</option>
              <option>Ireland</option>
              <option>Israel</option>
              <option>Italy</option>
              <option>Jamaica</option>
              <option>Japan</option>
              <option>Jordan</option>
              <option>Kazakhstan</option>
              <option>Kenya</option>
              <option>Kiribati</option>
              <option>Kuwait</option>
              <option>Kyrgyzstan</option>
              <option>Laos</option>
              <option>Latvia</option>
              <option>Lebanon</option>
              <option>Lesotho</option>
              <option>Liberia</option>
              <option>Libya</option>
              <option>Liechtenstein</option>
              <option>Lithuania</option>
              <option>Luxembourg</option>
              <option>Madagascar</option>
              <option>Malawi</option>
              <option>Malaysia</option>
              <option>Maldives</option>
              <option>Mali</option>
              <option>Malta</option>
              <option>Marshall Islands</option>
              <option>Mauritania</option>
              <option>Mauritius</option>
              <option>Mexico</option>
              <option>Micronesia</option>
              <option>Moldova</option>
              <option>Monaco</option>
              <option>Mongolia</option>
              <option>Montenegro</option>
              <option>Morocco</option>
              <option>Mozambique</option>
              <option>Myanmar</option>
              <option>Namibia</option>
              <option>Nauru</option>
              <option>Nepal</option>
              <option>Netherlands</option>
              <option>New Zealand</option>
              <option>Nicaragua</option>
              <option>Niger</option>
              <option>Nigeria</option>
              <option>North Korea</option>
              <option>North Macedonia</option>
              <option>Norway</option>
              <option>Oman</option>
              <option>Pakistan</option>
              <option>Palau</option>
              <option>Palestine</option>
              <option>Panama</option>
              <option>Papua New Guinea</option>
              <option>Paraguay</option>
              <option>Peru</option>
              <option>Philippines</option>
              <option>Poland</option>
              <option>Portugal</option>
              <option>Qatar</option>
              <option>Romania</option>
              <option>Russia</option>
              <option>Rwanda</option>
              <option>Saint Kitts and Nevis</option>
              <option>Saint Lucia</option>
              <option>Saint Vincent and the Grenadines</option>
              <option>Samoa</option>
              <option>San Marino</option>
              <option>Sao Tome and Principe</option>
              <option>Saudi Arabia</option>
              <option>Senegal</option>
              <option>Serbia</option>
              <option>Seychelles</option>
              <option>Sierra Leone</option>
              <option>Singapore</option>
              <option>Slovakia</option>
              <option>Slovenia</option>
              <option>Solomon Islands</option>
              <option>Somalia</option>
              <option>South Africa</option>
              <option>South Korea</option>
              <option>South Sudan</option>
              <option>Spain</option>
              <option>Sri Lanka</option>
              <option>Sudan</option>
              <option>Suriname</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>Syria</option>
              <option>Taiwan</option>
              <option>Tajikistan</option>
              <option>Tanzania</option>
              <option>Thailand</option>
              <option>Timor-Leste</option>
              <option>Togo</option>
              <option>Tonga</option>
              <option>Trinidad and Tobago</option>
              <option>Tunisia</option>
              <option>Turkey</option>
              <option>Turkmenistan</option>
              <option>Tuvalu</option>
              <option>Uganda</option>
              <option>Ukraine</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Uruguay</option>
              <option>Uzbekistan</option>
              <option>Vanuatu</option>
              <option>Vatican City</option>
              <option>Venezuela</option>
              <option>Vietnam</option>
              <option>Yemen</option>
              <option>Zambia</option>
              <option>Zimbabwe</option>
              </select></div>
              </div>
              <button onClick={() => advance(2)} className="bg-brand text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">Continue →</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-navy mb-1">Grades and curriculum</h3>
              <p className="text-sm text-gray-500 mb-5">Select what you'd like to assess. You can change this any time.</p>
              <div className="grid grid-cols-4 gap-2 mb-5">
                {GRADES.map(g => (
                  <button key={g} onClick={() => toggleGrade(g)} className={`py-2 rounded-lg border-2 text-xs font-bold transition-all ${grades.includes(g) ? 'border-brand bg-blue-50 text-brand' : 'border-gray-200 text-gray-400 hover:border-brand'}`}>{g}</button>
                ))}
              </div>
              <div className="text-xs font-semibold text-gray-500 mb-2">Curriculum</div>
              <div className="flex gap-2 mb-5">
                {CURRICULA.map(c => (
                  <button key={c} onClick={() => setCurric(c)} className={`flex-1 py-2 rounded-lg border-2 text-sm font-bold transition-all ${curric === c ? 'border-brand bg-blue-50 text-brand' : 'border-gray-200 text-gray-400 hover:border-brand'}`}>{c}</button>
                ))}
              </div>
              <button onClick={() => advance(3)} className="bg-brand text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">Continue →</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-bold text-navy mb-1">Here's your report</h3>
              <p className="text-sm text-gray-500 mb-5">What your assessors receive in their inbox — with one-click decision buttons.</p>
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-5">
                <div className="bg-navy px-4 py-3">
                  <div className="text-sm font-bold text-white">{form.school || 'Your school'} — Admissions Report</div>
                  <div className="text-xs text-blue-300 mt-0.5">Applicant: Alex Chen · {grades[0] || 'Grade 7'} · {curric} · Generated in 3m 08s</div>
                </div>
                <div className="p-4">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3">✓ Ready to admit</div>
                  {[['English','76','#002ec1'],['Mathematics','68','#002ec1'],['Reasoning','91','#002ec1'],['Mindset','80','#8b5cf6']].map(([label, pct, color]) => (
                    <div key={label} className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-gray-400 w-20">{label}</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="bar-fill h-full rounded-full transition-all duration-700" style={{width: '0%', background: color}} />
                      </div>
                      <span className="text-xs font-bold text-navy w-8 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 p-3 flex gap-2">
                  <div className="flex-1 py-2 rounded-lg border-2 border-green-200 bg-green-50 text-green-700 text-xs font-bold text-center cursor-pointer hover:bg-green-100">✓ Admit</div>
                  <div className="flex-1 py-2 rounded-lg border-2 border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold text-center cursor-pointer hover:bg-blue-100">~ With support</div>
                  <div className="flex-1 py-2 rounded-lg border-2 border-red-200 bg-red-50 text-red-700 text-xs font-bold text-center cursor-pointer hover:bg-red-100">✕ Do not admit</div>
                </div>
              </div>
              <button onClick={() => advance(4)} className="bg-brand text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">This looks great — activate my trial →</button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
              <h3 className="text-xl font-black text-navy mb-2">You're live, {form.name.split(' ')[0] || 'there'}!</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">Your first assessment link has been sent. The report and one-click decision email arrive automatically when your applicant completes it.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left text-xs mb-5">
                <div className="font-bold text-navy text-sm mb-2">Email sent to your applicant</div>
                <div className="text-gray-500 mb-1">Subject: Your admissions assessment — {form.school || 'your school'}</div>
                <div className="text-gray-500 mb-1">Secure link · expires 72 hours · auto-submits on timer</div>
                <div className="text-gray-500">Report + decision email arrives automatically on completion</div>
              </div>
              <a href="https://app.evalent.io/signup" className="inline-block bg-brand text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">Complete your account setup →</a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
