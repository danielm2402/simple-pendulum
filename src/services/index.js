export function pendulum(prmLongCuerda, prmGravedad, prmPosIni, prmVelIni) {
    let varPhi;
    let varTheta0
    const varW = Math.sqrt(prmGravedad / prmLongCuerda);
    const varT = 2 * Math.PI * Math.sqrt(prmLongCuerda / prmGravedad);
    const varF = varW / (2 * Math.PI);
    let varPhi1
    let funcAmplitud

    if (prmPosIni >= 0 && prmVelIni >= 0) {

        if (prmPosIni > 0 && prmVelIni > 0) {

            varPhi1 = Math.abs(Math.atan(prmVelIni / (prmPosIni * varW)))
            varPhi = 2 * Math.PI - varPhi1; //4
            varTheta0 = Math.abs(prmPosIni / Math.cos(varPhi))
            funcAmplitud = 'cos'
            console.log(varPhi1)
            console.log(varPhi)
            console.log(varTheta0)
        }
        if (prmPosIni == 0) {

            varPhi1 = Math.PI / 2
            varPhi = 2 * Math.PI - varPhi1; //4
            varTheta0 = Math.abs(prmVelIni / (varW * Math.sin(varPhi)))
            funcAmplitud = 'sen'
        }
        if (prmVelIni == 0) {

            varPhi = 0
            varTheta0 = prmPosIni
            funcAmplitud = 'cos'
        }

    }
    if (prmPosIni < 0 && prmVelIni >= 0) {
        console.log('TERCER')
        if (prmVelIni == 0) {
            varPhi = 0
            varTheta0 = Math.abs(prmPosIni)
            funcAmplitud = 'cos'
        }
        else {
            varPhi1 = Math.abs(Math.atan(prmVelIni / (-varW * prmPosIni)));
            varPhi = Math.PI + varPhi1; //3
            varTheta0 = Math.abs(prmPosIni / (Math.cos(varPhi)))
            funcAmplitud = 'cos'
        }

    }
    if (prmPosIni < 0 && prmVelIni < 0) {
        console.log('SEGUNDO')
        varPhi1 = Math.abs(Math.atan(-(prmVelIni / (prmPosIni * varW))))
        varPhi = Math.PI - varPhi1;//2
        varTheta0 = Math.abs(prmPosIni / (Math.cos(varPhi)))
        funcAmplitud = 'cos'
    }
    if (prmPosIni >= 0 && prmVelIni < 0) {
        console.log('PRIMERO')
        if (prmPosIni == 0) {
            varPhi = Math.PI / 2;//1
            varTheta0 = Math.abs(prmVelIni / (varW * Math.sin(varPhi)))
            funcAmplitud = 'sen'
            console.log(varW)
            console.log(varPhi)
            console.log(prmVelIni)
            console.log(varTheta0)

        }
        else {

            varPhi = Math.abs(Math.atan(prmVelIni / (-varW * prmPosIni)))
            varTheta0 = prmPosIni / Math.cos(varPhi)
            funcAmplitud = 'cos'

        }
    }


    return {
        frecuenciaNatural: varW,//rad/seg
        periodo: varT,//s
        frecuencia: varF,//hz
        desfase: varPhi,//rad
        amplitud: degrees_to_radians(varTheta0),//ang,
        funcAmplitud: funcAmplitud

    }

}

export function energies(prmMasa, prmGravedad, prmLongCuerda, prmPosIni, prmVelIni) {
    let EP = prmMasa * prmGravedad * prmLongCuerda * ((prmPosIni ^ 2) / 2)
    let EC = 1 / 2 * prmMasa * prmLongCuerda ^ 2 * prmVelIni ^ 2
    return {
        ep: EP,
        ec: EC,
        et: EP + EC
    }
}

export function amortiguado(prmLongCuerda, prmGravedad, prmPosIni, prmVelIni, prmMasa, prmB) {
    const gamma = prmB / (2 * prmMasa);
    const varW = Math.sqrt(prmGravedad / prmLongCuerda);
    const gamma_2 = Math.pow(gamma, 2)
    const varW_2 = Math.pow(varW, 2);
    let type
    let c1, c2, m1, m2, phi, c
    if (varW_2 === gamma_2) {
        //CRITICAMENTE AMORTIGUADO
        c1 = prmPosIni;
        c2 = prmVelIni + (c1 * gamma)
        type = 'amortiguado'
    }
    if (varW_2 < gamma_2) {
        //SOBREAMORTIGUADO
        type = 'sobreamortiguado'
        m1 = -gamma + (Math.sqrt(gamma_2 - varW_2))
        m2 = -gamma - (Math.sqrt(gamma_2 - varW_2))
        c2 = (prmVelIni - (prmPosIni * m1)) / (m2 - m1)
        c1 = prmPosIni - c2
    }

    return {
        type: type,
        c1: c1, //constantes arbitrarias
        c2: c2, //constantes arbitrarias
        m1: m1,
        m2: m2,
        phi: phi,
        c: c,
        varW: varW
    }
}


function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

