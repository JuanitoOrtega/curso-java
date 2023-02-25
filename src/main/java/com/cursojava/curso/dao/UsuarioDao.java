package com.cursojava.curso.dao;

import com.cursojava.curso.models.Usuario;

import java.util.List;

// Con una interfaz podemos determinar qué funciones va tener una clase
public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    boolean verificarCredenciales(Usuario usuario);
}
