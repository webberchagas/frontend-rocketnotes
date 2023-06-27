import { useState, useEffect } from 'react';
import { Container, Links, Content } from "./styles.js";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Header } from "../../components/Header";
import { ButtonText } from '../../components/ButtonText';
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const comfirm = window.confirm("Deseja realmente remover a nota?");

    if(comfirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fecthNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fecthNote();
  }, []);

  return (
    <Container>
      <Header />
      {
        data && <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove}/>
            
            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            {
              data.links && 
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                  {
                    data.tags.map( tag => (
                      <Tag 
                        key={tag.id}
                        title={tag.name}
                      />
                    )) 
                  }
              </Section>
            }

            <Button title="Voltar" onClick={handleBack}/>
          </Content>
        </main>
      }
    </Container>
  )
}
