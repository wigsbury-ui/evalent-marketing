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
    <section id="trial" className="bg-blue-50 py-16 px-6 scroll-mt-4">
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
              <optgroup label="Most popular">
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="Singapore">Singapore</option>
              <option value="Qatar">Qatar</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="India">India</option>
              <option value="South Africa">South Africa</option>
              <option value="Malaysia">Malaysia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Ireland">Ireland</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Kenya">Kenya</option>
              <option value="Nigeria">Nigeria</option>
              </optgroup>
              <optgroup label="All countries">
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="North Korea">North Korea</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Korea">South Korea</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City">Vatican City</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
              </optgroup>
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
