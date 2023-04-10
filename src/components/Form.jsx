'use client'
import { useState } from 'react'
import styles from '../app/page.module.css'
import { motion } from "framer-motion"

const Form = () => {
  const [promedio, setpromedio] = useState(null)
  const [notas, setnotas] = useState({
    nota1: 0,
    nota2: 0,
    nota3: 0,
    nota4: 0
  })
  
  const [porcent, setporcent] = useState({
    porcent1: 15,
    porcent2: 25, 
    porcent3: 30,
    porcent4: 30
  })
  
  const onChangeNota = (e) => {
    setnotas({
      ...notas,
      [e.target.name]: e.target.value
    })
  }

  const onChangePorcent = (e) => {
    setporcent({
      ...porcent,
      [e.target.name]: e.target.value
    })
  }

  function Promedio () {
    const n1 = porcent.porcent1 / 100 * notas.nota1
    const n2 = porcent.porcent2 / 100 * notas.nota2
    const n3 = porcent.porcent3 / 100 * notas.nota3
    const n4 = porcent.porcent4 / 100 * notas.nota4
    const promedioFinal = n1+n2+n3+n4
    setpromedio(promedioFinal)
  }


  return (
    <>
      <motion.h2 drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} className={styles.title}>Calcula tu promedio</motion.h2>
      <div className={styles.div}>
        <form className={styles.form}>
          <div className={styles.container_input}>
            <p className={styles.p}>Nota 1</p>
            <input className={styles.input} type='number' name='nota1' value={notas.nota1} onChange={onChangeNota} />
            <p className={styles.p}>Ponderado</p>
            <label className={styles.label}>{porcent.porcent1}%</label>
            <input className={styles.input_range} type='range' name='porcent1' value={porcent.porcent1} max={100} min={0} onChange={onChangePorcent} />
          </div>          

          <div className={styles.container_input}>
            <p className={styles.p}>Nota 2</p>
            <input className={styles.input} type='number' name='nota2' value={notas.nota2} onChange={onChangeNota} />
            <p className={styles.p}>Ponderado</p>
            <label className={styles.label}>{porcent.porcent2}%</label>
            <input className={styles.input_range} type='range' name='porcent2' value={porcent.porcent2} max={100} min={0} onChange={onChangePorcent} />
          </div>

          <div className={styles.container_input}>
            <p className={styles.p}>Nota 3</p>
            <input className={styles.input} type='number' name='nota3' value={notas.nota3} onChange={onChangeNota} />
            <p className={styles.p}>Ponderado</p>
            <label className={styles.label}>{porcent.porcent3}%</label>
            <input className={styles.input_range} type='range' name='porcent3' value={porcent.porcent3} max={100} min={0} onChange={onChangePorcent} />
          </div>

          <div className={styles.container_input}>
            <p className={styles.p}>Nota 4</p>
            <input className={styles.input} type='number' name='nota4' value={notas.nota4} onChange={onChangeNota} />
            <p className={styles.p}>Ponderado</p>
            <label className={styles.label}>{porcent.porcent4}%</label>
            <input className={styles.input_range} type='range' name='porcent4' value={porcent.porcent4} max={100} min={0} onChange={onChangePorcent} />
          </div>

        </form>
        <motion.button drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} onClick={Promedio} className={styles.button} >Calcular promedio</motion.button>
        {promedio && <motion.p drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} style={{ color: promedio >= 40 ? '#27ab67' : '#f55', fontSize: 20}}>Tu promedio es {promedio}</motion.p>}
        <p style={{ position: 'absolute', bottom: 0, textAlign: 'center', fontSize: 18 }}>Los normalitos</p>
      </div>
    </>
  )
}

export default Form