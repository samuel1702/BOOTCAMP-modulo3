
const classA = [
  {
    name: "Samuel",
    grade: 10
  },
  {
    name: "felipe",
    grade: 7
  },
  {
    name: "fulano",
    grade: 4
  }
]

const classB = [
  {
    name: "rogerio",
    grade: 8
  },
  {
    name: "siclano",
    grade: 9
  },
  {
    name: "fulano2",
    grade: 4
  },
  {
    name: "Novo Aluno",
    grade: 5
  }

]

function calculateAverange(students) {
  let sum = 0

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade

  }

  const averageT = sum / students.length

  return averageT
}


function print(average, turma, numeroDeAlunos) {
  console.log(`${turma} com ${numeroDeAlunos} students:`)

  if (average > 5) {
    console.log(`A average da ${turma} foi de ${average} | Parabéns`)

  } else {
    console.log(`a média da ${turma} é menor que 5:${average}`)

  }
}


function markAsFlunked(student) {

  student.flunked = false
  if (student.grade < 5) {
    student.flunked = true
  }



}



function sendMessageReprovado(student) {
  if (student.flunked) {
    console.log(`o Aluno ${student.name} está flunked!`)

  }
}

function studentReprovado(students) {

  for (let student of students) {
    markAsFlunked(student)
    sendMessageReprovado(student)
  }

}

{//executaveis
  const average1 = calculateAverange(classA)
  const average2 = calculateAverange(classB)

  print(average1, 'turmaA', classA.length)
  print(average2, 'turmaB', classB.length)

  studentReprovado(classA)
  studentReprovado(classB)
}