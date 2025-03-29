# Guia para Instalação e Execução

Este guia descreve os passos necessários para instalar e executar um projeto Node.js. O projeto requer que você 
tenha o `ollama` instalado e pelo menos um modelo baixado.

## Pré-requisitos

1. **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar a versão instalada 
com:
   ```bash
   node -v
   ```
   Se necessário, instale-o a partir do [site oficial](https://nodejs.org/pt/download).

2. **npm (Node Package Manager)**: O npm é instalado junto com o Node.js. Verifique sua versão com:
   ```bash
   npm -v
   ```

3. **ollama**: Instale o `ollama` seguindo as instruções no [repositório 
oficial](https://github.com/ollama/ollama?tab=readme-ov-file#linux).

4. **Modelo baixado**: Certifique-se de ter pelo menos um modelo baixado e configurado para uso com o `ollama`, caso não tenha, baixe um modelo a partir de [Models](https://ollama.com/search).

## Passos para Instalação

### 1. Clonar o Repositório
Clone o repositório do projeto para sua máquina local usando Git:
```bash
git clone git@github.com:BdsOliveira/rag_ia.git
```

Navegue até o diretório do projeto clonado:
```bash
cd rag_ia
```

### 2. Instalar Dependências
Instale as dependências do projeto utilizando npm:
```bash
npm install
```

<!-- ### 3. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias para o projeto. Exemplo:
```plaintext
PORT=3000
OLLAMA_API_KEY=your-ollama-api-key
``` -->

### 3. Executar o Projeto
Inicie o servidor Node.js com o seguinte comando:
```bash
npm run dev
```

## Verificação de Execução

Após a execução do projeto, verifique se está rodando corretamente. Por padrão, o servidor Node.js deve estar 
escutando na porta especificada no arquivo `.env` (por exemplo, `3000`). Você pode verificar isso acessando:
```
http://localhost:3000
```

Se tudo estiver configurado corretamente, você verá a resposta do servidor ou a página inicial do projeto.

## Troubleshooting

- **Problemas com o `ollama`**: Verifique se o `ollama` está rodando e se o modelo baixado está disponível. 
Consulte a documentação do `ollama` para mais informações.
- **Dependências ausentes**: Se houver erros relacionados a dependências, certifique-se de que todas as 
dependências listadas no `package.json` foram instaladas corretamente.

## Contribuição

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch com suas alterações:
   ```bash
   git checkout -b minha-nova-branch
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Faça um push para a sua branch:
   ```bash
   git push origin minha-nova-branch
   ```
5. Abra um Pull Request no repositório original.

## Licença

Este projeto está licenciado sob a Licença MIT.
