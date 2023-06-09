import { db } from "./SQlite";

export function criarTabela() {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
            "Notas " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);")
    })
}

export async function adicionaNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?, ?, ?);", [nota.titulo, nota.categoria, nota.texto], () => {
                resolve("Nota Adicionada")
            })
        })
    })
}

export async function atualizarNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("UPDATE Notas SET titulo = ?, categoria = ?, texto = ? WHERE id = ?; ", [nota.titulo, nota.categoria, nota.texto, nota.id], () => {
                resolve("Nota Atualizada com Sucesso")
            })
        })
    })
}

export async function removeNota(nota) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("DELETE FROM Notas WHERE id = ?; ", [nota.id], () => {
                resolve("Nota Removida com Sucesso")
            })
        })
    })
}

export async function buscaNota() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM Notas; ", [], (transaction, resultados) => {
                resolve(resultados.rows._array)
            })
        })
    })
}