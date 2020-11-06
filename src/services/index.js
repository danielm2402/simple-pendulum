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
        varPhi1 = Math.abs(Math.atan(-(prmVelIni / (prmPosIni * varW))))
        varPhi = Math.PI - varPhi1;//2
        varTheta0 = Math.abs(prmPosIni / (Math.cos(varPhi)))
        funcAmplitud = 'cos'
    }
    if (prmPosIni >= 0 && prmVelIni < 0) {

        if (prmPosIni == 0) {
            varPhi = Math.PI / 2;//1
            varTheta0 = Math.abs(prmVelIni / (varW * Math.sin(varPhi)))
            funcAmplitud = 'sen'

        }
        else {
            varPhi = Math.abs(Math.atan(prmVelIni / (-varW * prmPosIni)))
            varTheta0 = prmPosIni / Math.cos(varPhi)
            funcAmplitud = 'cos'
        }
    }


    return {
        frecuenciaNatural: varW ? varW.toFixed(2) : varW,//rad/seg
        periodo: varT ? varT.toFixed(2) : varT,//s
        frecuencia: varF ? varF.toFixed(2) : varF,//hz
        desfase: varPhi ? varPhi.toFixed(2) : varPhi,//rad
        amplitud: varTheta0 ? degrees_to_radians(varTheta0).toFixed(2) : varTheta0,//ang,
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
    const varF = varW / (2 * Math.PI);
    let type
    let c1, c2, m1, m2, phi, c, phi1, ommega
    ommega = Math.sqrt(varW_2 - gamma_2)
    if (varW_2 == gamma_2) {
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
    if (varW_2 > gamma_2) {
        //SUBAMORTIGUADO

        type = 'subamortiguado'
        if (prmPosIni >= 0 && prmVelIni >= 0) {
            if (prmPosIni == 0) {
                phi1 = Math.PI / 2;
                phi = 2 * Math.PI - phi1;
                c = Math.abs(prmVelIni / (ommega * Math.sin(phi)))
            }
            if (prmVelIni == 0) {
                phi1 = Math.abs(Math.atan(-gamma / ommega))
                phi = 2 * Math.PI - phi1;
                c = Math.abs(prmPosIni / (Math.cos(phi)))
            }
            if (prmVelIni > 0 && prmPosIni > 0) {
                phi1 = Math.abs(Math.atan((prmVelIni / (prmPosIni * -ommega)) + (-gamma / ommega)))
                phi = 2 * Math.PI - phi1;
                c = Math.abs(prmPosIni / (Math.cos(phi)))
            }

        }
        if (prmVelIni >= 0 && prmPosIni < 0) {
            if (prmVelIni == 0) {

                phi1 = Math.abs(Math.atan(-gamma / ommega))
                phi = Math.PI + phi1;
                c = Math.abs(prmPosIni / (Math.cos(phi)))
            }
            else {
                phi1 = Math.abs(Math.atan((prmVelIni / (prmPosIni * -ommega)) + (-gamma / ommega)))
                phi = Math.PI + phi1;
                c = Math.abs(prmPosIni / (Math.cos(phi)));
            }
        }
        if (prmVelIni < 0 && prmPosIni < 0) {
                phi1 = Math.abs(Math.atan((prmVelIni / (prmPosIni * -ommega)) + (-gamma / ommega)))
                phi = Math.PI - phi1;
                c = Math.abs(prmPosIni / (Math.cos(phi)));
        }
        if (prmPosIni >= 0 && prmVelIni < 0) {
            if (prmPosIni == 0) {
                phi = Math.PI / 2
                c = Math.abs(prmVelIni / (ommega * Math.sin(phi)));
            }
            else {
                phi = Math.abs(Math.atan((prmVelIni / (prmPosIni * -ommega)) + (-gamma / ommega)))
                c = Math.abs(prmPosIni / (Math.cos(phi)));
            }
        }
    }
   
    return {
        type: type,
        c1: c1 , //constantes arbitrarias
        c2: c2 , //constantes arbitrarias
        m1: m1 ,
        m2: m2,
        phi: phi ,
        c: c,
        frecuenciaNatural: varW,
        frecuencia:  varF,
        gamma: gamma,
        ommega:  ommega
    }
}
export function forzado(prmLongCuerda, prmGravedad, prmPosIni, prmVelIni, prmMasa, prmB, prmF0, prmWf) {
    let amplitudMaxima, delta;
    if (prmB > 0) {
        const { c1, c2, c, frecuenciaNatural, frecuencia, m1, m2, phi, gamma, type, ommega } = amortiguado(prmLongCuerda, prmGravedad, prmPosIni, prmVelIni, prmMasa, prmB);
        const denominador = (Math.pow((Math.pow(frecuenciaNatural, 2) - Math.pow(prmWf, 2)), 2)) + (Math.pow(2 * gamma * prmWf), 2)
        amplitudMaxima = (prmF0 / prmMasa) / (Math.sqrt(denominador));
        delta = Math.atan((2 * gamma * prmWf) / (Math.pow(frecuenciaNatural, 2) - Math.pow(prmWf, 2)))
        return {
            type: type,
            c1: c1, //constantes arbitrarias
            c2: c2, //constantes arbitrarias
            m1: m1,
            m2: m2,
            phi: phi,
            c: c,
            frecuenciaNatural,
            frecuencia,
            ommega,
            gamma: gamma,
            amplitudMaxima: amplitudMaxima ,
            delta: delta,
            label: 'amortiguado'

        }
    } else {
        const { frecuenciaNatural, periodo, frecuencia, desfase, amplitud, funcAmplitud } = pendulum(prmLongCuerda, prmGravedad, prmPosIni, prmVelIni)
        if (prmWf < frecuenciaNatural) {
            const denominador = Math.pow(frecuenciaNatural, 2) - Math.pow(prmWf, 2)
            amplitudMaxima = (prmF0 / prmMasa) / (denominador)
            delta = 0
        }
        if (prmWf > frecuenciaNatural) {
            const denominador = Math.pow(prmWf, 2) - (Math.pow(frecuenciaNatural, 2))
            amplitudMaxima = (prmF0 / prmMasa) / (denominador)
            delta = Math.PI
        }

        return {
            frecuenciaNatural, periodo, frecuencia, desfase, amplitud, funcAmplitud,
            amplitudMaxima: amplitudMaxima,
            delta:  delta,
            label: 'simple'
        }
    }
}

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}

