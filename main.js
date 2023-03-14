console.log("---------------------------practica---------------------------");

//1*
// Tienes un array de objetos llamado "personas" que contiene información de varias personas. Cada objeto tiene las propiedades "nombre", "edad" y "profesión". Quieres imprimir en la consola solo las edades de todas las personas en el array. ¿Cómo lo harías utilizando un loop for...in?
personas=[];

persona1={
  nombre:"Carlos",
  edad:23,
  profesion:"Cantante"
};
persona2={
  nombre:"Juan",
  edad:50,
  profesion:"Maestro del JavaScript"
};
persona3={
  nombre:"Andrea",
  edad:18,
  profesion:"EStudiante"
};
persona4={
  nombre:"Maria",
  edad:40,
  profesion:"Abogada"
};
personas.push(persona1,persona2,persona3,persona4); 
 for (const i in personas) {
  console.log(`Iterando con for in la edad ${personas[i].edad}`);
  }
 


//2*
// Tienes un array de números llamado "numeros" y quieres imprimir en la consola cada número multiplicado por 2. ¿Cómo lo harías utilizando un loop for...of?
numeros=[1,2,3,4,5,6,7,8];
for (const i of numeros) {
  console.log(i*2);
}

//3*
// Crea un objeto llamado libro que tenga las siguientes propiedades:
// titulo con valor "Cien años de soledad"
// autor con valor "Gabriel García Márquez"
// año con valor 1967
// Luego, utiliza un loop for...in para imprimir en la consola las propiedades y valores del objeto libro.
libro={};
let titulo;
let autor;
let valor;

libro.titulo="Cien años de soledad";
libro.autor="Gabriel Garcia Marquez";
libro.valor=1967
for (const propiedad in libro) {
    console.log(`iterando con for in ${propiedad}:${libro[propiedad]}`);
  }


//Crea una función llamada multiplicar que reciba dos números como parámetros y devuelva su multiplicación.
const multiplicar=(num1,num2)=>{
      return Number(num1)*Number(num2)
}
numero1=prompt("Ingrese un numero a multiplicar ")
numero2=prompt("Ingrese el otro numero a multiplicar")

console.log( multiplicar(numero1,numero2));

// Crea una función llamada sumarArray que reciba un arreglo de números como parámetro y devuelva la suma de todos sus elementos.
const sumarArray=(a)=>{
  let suma=0;
  for(let i=0;i<a.length;i++){
    let numero = a[i];
         suma += numero
    console.log(suma);
  }
  return suma
}
let arregloNum=[2,2,3,4]
console.log(sumarArray(arregloNum));
