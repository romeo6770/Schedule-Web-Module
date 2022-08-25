const cDate = new Date();

//------External HTML ID------
//---Variable to fetch the external HTML id in order to change the text 
let ClassExtID = "cName"
let TeacherExtID = "cTeach"
let ClassroomExtID = "cLocation"
let DurationExtID = "cDuration"
let nextClass = "sigClase"
let nextTime = "sigTiempo"
let nextClassroom = "sigSalon"

//------Current time variables------
//---These variables keep the current time and date
let ccDate = cDate.getDate();
let cDay = cDate.getDay();
let cHours = cDate.getHours();
let cMinutes = cDate.getMinutes();

//------Class State Variable------
//---This Variable is used to keep a record of whether a class is active
//---It is used to check whether a class is turn on and off the led and remove class text if none is present
let classState = 0

//------LED Counter Var------
//---This variables can modify the color and external html id of the led indicator
//---onColor and offColor are available to customize the led color value with css built-in colors or with hex code
//---led is off by default 
let ledVar = "ledDot"
let onColor = "green"
let offColor = "red"
 
//------Class Time Variables------
//---H stands for "Hours"
//---Whenever a class duration is longer than a hour start hour and end hour are recorded
//---HS stands for "Start Hour"
//---HE stands for "End Hour"
 
let ElectronicaH = 7
let ElectronicaSHS = 8
let ElectronicaSHE = 9
let PLCH = 8
let ServicioH = 9
let CulturaHS = 15
let CulturaHE = 16
let MateHS = 8
let MateHE = 9
let MecMatHS = 10
let MecMatHE = 11
let ComHS = 11
let ComHE = 12
let MagisHS = 12
let MagisHE = 13
let ProyIngHS = 10
let ProyIngHE = 11

//-------Class Day Variables-------
//---TimeDate module translates weekday into a number therefore day variables for classes are set to that number
//---Monday
let ElectronicaM, PLCM, ServicioM, CulturaM; 
ElectronicaM = PLCM = ServicioM = CulturaM = 1;
//---Tuesday
let MateT, MecMatT, ComT, MagisT;
MateT = MecMatT = ComT = MagisT = 2;
//---Wednesday
let ElectronicaW, PLCW, ServicioW, CulturaW;
ElectronicaW = PLCW = ServicioW = CulturaW = 3;
//---Thursday
let MateX, MecMatX, ComX;
MateX = MecMatX = ComX = 4;
//---Friday
let ElectronicaF, PLCF, ServicioF, CulturaF, ProyF;
ElectronicaF = PLCF = ServicioF = CulturaF = ProyF = 5;
//---Saturday
let ElectronicaS;
ElectronicaS = 6;
//-------------

//------Class Details Variables------
//---These variables are used to include the details about each class
//---Electrónica---
let ElectronicaN = "Ingeniería Electrónica"
let ElectronicaTch = "José de Jesús López Villalobos"
let ElectronicaClss = "LTMFT"
let ElectronicaDur = "7:00 - 7:55"

//---Electronica Sabados---
let ElectronicaSTch = "José de Jesús López Villalobos"
let ElectronicaSClss = "Zoom"
let ElectronicaSDur = "8:00 - 9:55"

//---Controladores Lógicos Programables---
let PLCN = "Controladores Lógicos Programables"
let PLCTch = "Juan Carlos Vázquez Meza"
let PLCClss = "LTATM"
let PLCDur = "8:00 - 8:55"

//---Servicio Social---
let ServicioN = "Servicio Social"
let ServicioTch = "Yessica Alejandra González García"
let ServicioClss = "LT1317"
let ServicioDur = "9:00 - 9:55"

//---Cultura Global---
let CulturaN = "Cultura Global III"
let CulturaTch = "Javier Marcelo Rodríguez Moncayo"
let CulturaClss = "LT1304"
let CulturaDur = "3:30 - 4:55"

//---Matemáticas---
let MateN = "Matemáticas Avanzadas"
let MateTch = "Nancy Paola García Lozano"
let MateClss = "LT1412"
let MateDur = "8:30 - 9:55"

//---Mecánica de Materiales---
let MecMatN = "Mecánica de Materiales"
let MecMatTch = "Juan Antonio Domínguez Sánchez"
let MecMatClss = "LT1316"
let MecMatDur = "10:00 - 11:25"

//---Comunicación Oral y Escrita---
let ComN = "Comunicación Oral y Escrita"
let ComTch = "Ivan Felipe Del Ángel Reyes"
let ComClss = "LT1312"
let ComDur = "11:30 - 12:25"

//---Magistral---
let MagisN = "Servicio Social Magistral"
let MagisTch = "Ivan Felipe Del Ángel Reyes"
let MagisClss = "Clase Magistral"
let MagisDur = "12:30 - 1:55"

//---Proyectos Ingeniería---
let ProyIngN = "Proyectos de Ingeniería"
let ProyIngTch = "Nancy Paola García Lozano" 
let ProyIngClss = "LT1408"
let ProyIngDur = "10:00 - 11:25"

//------Class Date and Time Conditionals------
//---First conditional checks for weekday, second conditional checks for hour so they are independent although correlated
//---Monday and Wednesday
if (cDay === ElectronicaM || cDay === ElectronicaW || cDay === ElectronicaF){
  if(cHours === 6){
    document.getElementById(nextClass).innerHTML = ElectronicaN
    document.getElementById(nextTime).innerHTML = ElectronicaDur
    document.getElementById(nextClassroom).innerHTML = ElectronicaClss
  }
  if (cHours === ElectronicaH && cMinutes <= 55){
    document.getElementById(ClassExtID).innerHTML = ElectronicaN
    document.getElementById(TeacherExtID).innerHTML = ElectronicaTch
    document.getElementById(ClassroomExtID).innerHTML = ElectronicaClss
    document.getElementById(DurationExtID).innerHTML = ElectronicaDur
    document.getElementById(nextClass).innerHTML = PLCN
    document.getElementById(nextTime).innerHTML = PLCDur
    document.getElementById(nextClassroom).innerHTML = PLCClss
    classState = 1
  }
}
if (cDay === PLCM || cDay === PLCW || cDay === PLCF){
  if (cHours === PLCH && cMinutes <= 55){
    document.getElementById(ClassExtID).innerHTML = PLCN
    document.getElementById(TeacherExtID).innerHTML = PLCTch
    document.getElementById(ClassroomExtID).innerHTML = PLCClss
    document.getElementById(DurationExtID).innerHTML = PLCDur
    document.getElementById(nextClass).innerHTML = ServicioN
    document.getElementById(nextTime).innerHTML = ServicioDur
    document.getElementById(nextClassroom).innerHTML = ServicioClss
    classState = 1
  }
}

if (cDay === ServicioM || cDay === ServicioW || cDay === ServicioF){
  if (cHours === ServicioH && cMinutes <= 55){
    document.getElementById(ClassExtID).innerHTML = ServicioN
    document.getElementById(TeacherExtID).innerHTML = ServicioTch
    document.getElementById(ClassroomExtID).innerHTML = ServicioClss
    document.getElementById(DurationExtID).innerHTML = ServicioDur
    document.getElementById(nextClass).innerHTML = CulturaN
    document.getElementById(nextTime).innerHTML = CulturaDur
    document.getElementById(nextClassroom).innerHTML = CulturaClss
    classState = 1
    if(cDay === ProyF){
      document.getElementById(nextClass).innerHTML = ProyIngN
      document.getElementById(nextTime).innerHTML = ProyIngDur
      document.getElementById(nextClassroom).innerHTML = ProyIngClss
      classState = 1
    }
  }
}

if (cDay === CulturaM || cDay === CulturaW || cDay === CulturaF){
  if (cHours === CulturaHS || cHours === CulturaHE){
    document.getElementById(ClassExtID).innerHTML = CulturaN
    document.getElementById(TeacherExtID).innerHTML = CulturaTch
    document.getElementById(ClassroomExtID).innerHTML = CulturaClss
    document.getElementById(DurationExtID).innerHTML = CulturaDur
    document.getElementById(nextClass).innerHTML = " "
    document.getElementById(nextTime).innerHTML = " "
    document.getElementById(nextClassroom).innerHTML = " "
    classState = 1
  }
}  
if (cDay === CulturaM || cDay === CulturaW){
  if(cHours === 13, 13, 12, 11){
    document.getElementById(nextClass).innerHTML = CulturaN
    document.getElementById(nextTime).innerHTML = CulturaDur
    document.getElementById(nextClassroom).innerHTML = CulturaClss
  }
}
//---Tuesday and Thursday
if (cDay === MateT || cDay === MateX){
  if(cHours === 7, 6){
    document.getElementById(nextClass).innerHTML = MateN
    document.getElementById(nextTime).innerHTML = MateDur
    document.getElementById(nextClassroom).innerHTML = MateClss
  }
  if (cHours === MateHS || cHours === MateHE){
    document.getElementById(ClassExtID).innerHTML = MateN
    document.getElementById(TeacherExtID).innerHTML = MateTch
    document.getElementById(ClassroomExtID).innerHTML = MateClss
    document.getElementById(DurationExtID).innerHTML = MateDur
    document.getElementById(nextClass).innerHTML = MecMatN
    document.getElementById(nextTime).innerHTML = MecMatDur
    document.getElementById(nextClassroom).innerHTML = MecMatClss
    classState = 1
  }
}  

if (cDay === MecMatT || cDay === MecMatX){
  if (cHours === MecMatHS || cHours === MecMatHE){
    document.getElementById(ClassExtID).innerHTML = MecMatN
    document.getElementById(TeacherExtID).innerHTML = MecMatTch
    document.getElementById(ClassroomExtID).innerHTML = MecMatClss
    document.getElementById(DurationExtID).innerHTML = MecMatDur
    classState = 1
    if (cDay === MecMatT){
      document.getElementById(nextClass).innerHTML = ComN
      document.getElementById(nextTime).innerHTML = ComDur
      document.getElementById(nextClassroom).innerHTML = ComClss
      classState = 1

    }
  }
}  

if (cDay === ComT){
  if (cHours === ComHS || cHours === ComHE){
    document.getElementById(ClassExtID).innerHTML = ComN
    document.getElementById(TeacherExtID).innerHTML = ComTch
    document.getElementById(ClassroomExtID).innerHTML = ComClss
    document.getElementById(DurationExtID).innerHTML = ComDur
    document.getElementById(nextClass).innerHTML = MagisN
    document.getElementById(nextTime).innerHTML = MagisDur
    document.getElementById(nextClassroom).innerHTML = MagisClss
    classState = 1
  }
}  

if (cDay === MagisT){
  if (cHours === MagisHS || cHours === MagisHE){
    document.getElementById(ClassExtID).innerHTML = MagisN
    document.getElementById(TeacherExtID).innerHTML = MagisTch
    document.getElementById(ClassroomExtID).innerHTML = MagisClss
    document.getElementById(DurationExtID).innerHTML = MagisDur
    classState = 1
  }
}  

//---Friday
if (cDay === ProyF){
  if (cHours === ProyIngHS || cHours === ProyIngHE){
    document.getElementById(ClassExtID).innerHTML = ProyIngN
    document.getElementById(TeacherExtID).innerHTML = ProyIngTch
    document.getElementById(ClassroomExtID).innerHTML = ProyIngClss
    document.getElementById(DurationExtID).innerHTML = ProyIngDur
    classState = 1
  }
}  

//---Saturday
if (cDay === ElectronicaS){
  if (cHours === ElectronicaSHS || cHours === ElectronicaSHE){
    document.getElementById(ClassExtID).innerHTML = ElectronicaN
    document.getElementById(TeacherExtID).innerHTML = ElectronicaTch
    document.getElementById(ClassroomExtID).innerHTML = ElectronicaClss
    document.getElementById(DurationExtID).innerHTML = ElectronicaDur
    classState = 1
  }
}  

//Switch case in order to reassign string values to the numeric values given by "cDay" argument
switch (cDate.getDay()) {
  case 0:
    cDay = "Domingo";
    break;
  case 1:
    cDay = "Lunes";
    break;
  case 2:
     cDay = "Martes";
    break;
  case 3:
    cDay = "Miércoles";
    break;
  case 4:
    cDay = "Jueves";
    break;
  case 5:
    cDay = "Viernes";
    break;
  case 6:
    day = "Sabado";
}

// This is used to display current time and date
document.getElementById("ccDate").innerHTML = " "  + cDay + " "  + ccDate + " "  + cHours + ":"  + cMinutes

 
//Conditional to check the state of the LED and turn it the right color 
if (classState === 0){
  document.getElementById(ledVar).style.background=offColor;
  document.getElementById(ClassExtID).innerHTML = " "
  document.getElementById(TeacherExtID).innerHTML = " "
  document.getElementById(ClassroomExtID).innerHTML = " "
  document.getElementById(DurationExtID).innerHTML = " " 
} 
else{
  if (classState === 1){
    document.getElementById(ledVar).style.background=onColor;
  }
}

