package br.com.colaborador.colaborador.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.colaborador.colaborador.domain.entity.Colaborador;

public interface IColaboradorRepository extends JpaRepository<Colaborador, Long> {

}
