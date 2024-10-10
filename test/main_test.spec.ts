import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';

describe('Testando APIs', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api-desafio-qa.onrender.com/docs';

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());
  /**
   * Teste 1: Criar um novo mercado
   * POST /mercado
   */
  describe('verificar criação de usuário', () => {
    it('Deve criar um usuário', async () => {
      const mercado = {
        nome: 'a',
        cnpj: '12345678910111',
        endereco: 'e'
      };
      await p
        .spec()
        .post(`${baseUrl}/mercado`)
        .withJson(mercado)
        .expectStatus(StatusCodes.OK);
    });

    /**
     * Teste 2: Buscar um Mercado
     * GET /mercado/id
     */
    describe('Testar funcionamento da api de get por id', () => {
      it('Deve buscar dados de mercado do id 200', async () => {
        await p.spec().get(`${baseUrl}/mercado/200`).expectStatus(StatusCodes.OK);
      });
    });

    /**
     * Teste 3: Adicionar um mercado
     * PUT /mercado/id
     */
    describe('Testar funcionamento do PUT na api', () => {
      it('Deve atualizar dados de mercado do id 200', async () => {
        const mercadoNovo = {
          nome: 'a',
          cnpj: '12345678910111',
          endereco: 'e'
        };
        await p
          .spec()
          .put(`${baseUrl}/mercado/20`)
          .withJson(mercadoNovo)
          .expectStatus(StatusCodes.OK);
      });

      /**
       * Teste 4: Adicionar item a um mercado
       * PUT /mercado
       */
      describe('Testar funcionamento do POST de frutas na api', () => {
        it('Deve adicionar item ao mercado do id 200', async () => {
          const fruta = {
            nome: 'banana',
            valor: 3
          };
          await p
            .spec()
            .post(`${baseUrl}/mercado/{200}/produtos/hortifruit/frutas`)
            .withJson(fruta)
            .expectStatus(StatusCodes.OK);
        });
      });

      /**
       * Teste 5: Adicionar item a um mercado
       * PUT /mercado/{200}/produtos/padaria/doces
       */
      describe('Testar funcionamento do POST de doces na api', () => {
        it('Deve adicionar item ao mercado do id 200', async () => {
          const doce = {
            nome: 'bolo',
            valor: 2
          };
          await p
            .spec()
            .post(`${baseUrl}/mercado/{200}/produtos/padaria/doces`)
            .withJson(doce)
            .expectStatus(StatusCodes.OK);
        });
      });

      /**
       * Teste 6: Adicionar item a um mercado
       * PUT /mercado/{200}/produtos/padaria/salgados
       */
      describe('Testar funcionamento do POST de salgado na api', () => {
        it('Deve adicionar item ao mercado do id200', async () => {
          const salgado = {
            nome: 'coxinha',
            valor: 1
          };
          await p
            .spec()
            .post(`${baseUrl}/mercado/{200}/produtos/padaria/salgados`)
            .withJson(salgado)
            .expectStatus(StatusCodes.OK);
        });
      });

      /**
       * Teste 7: verificar item doce a um mercado
       * GET /mercado/{200}/produtos/padaria/doces
       */
      describe('Testar funcionamento do get de doce na api', () => {
        it('Deve verificar item no mercado do id 200', async () => {
          await p
            .spec()
            .get(`${baseUrl}/mercado/{200}/produtos/padaria/doces`)
            .expectStatus(StatusCodes.OK);
        });
      });

      /**
       * Teste 8: verificar item salgado a um mercado
       * GET /mercado/{200}/produtos/padaria/salgados
       */
      describe('Testar funcionamento do get de salgados na api', () => {
        it('Deve verificar item no mercado do id 200', async () => {
          await p
            .spec()
            .get(`${baseUrl}/mercado/{200}/produtos/padaria/salgados`)
            .expectStatus(StatusCodes.OK);
        });
      });

      /**
       * Teste 9: verificar item fruta a um mercado
       * GET /mercado/{200}/produtos/hortifruit/frutas
       */
      describe('Testar funcionamento do get de frutas na api', () => {
        it('Deve verificar item no mercado do id 200', async () => {
          await p
            .spec()
            .get(`${baseUrl}/mercado/{200}/produtos/hortifruit/frutas`)
            .expectStatus(StatusCodes.OK);
        });
      });

      /**
       * Teste 10: Adicionar item bovino a um mercado
       * PUT /mercado/{200}/produtos/acougue/bovinos
       */
      describe('Testar funcionamento do POST de bovino na api', () => {
        it('Deve adicionar item ao mercado do id 200', async () => {
          const bovino = {
            nome: 'file',
            valor: 2
          };
          await p
            .spec()
            .post(`${baseUrl}/mercado/{200}/produtos/acougue/bovinos`)
            .withJson(bovino)
            .expectStatus(StatusCodes.OK);
        });
      });

/**
       * Teste 11: verificar item bovino a um mercado
       * GET /mercado/{200}/produtos/acougue/bovino
       */
describe('Testar funcionamento do get de bovino na api', () => {
    it('Deve verificar item no mercado do id 200', async () => {
      await p
        .spec()
        .get(`${baseUrl}/mercado/{200}/produtos/acougue/bovinos`)
        .expectStatus(StatusCodes.OK);
    });
  });

      /**
       * Teste 12: Adicionar item suino a um mercado
       * PUT /mercado/{200}/produtos/acougue/suinos
       */
      describe('Testar funcionamento do POST de bovino na api', () => {
        it('Deve adicionar item ao mercado do id 200', async () => {
          const suino = {
            nome: 'lombo',
            valor: 2
          };
          await p
            .spec()
            .post(`${baseUrl}/mercado/{200}/produtos/acougue/suinos`)
            .withJson(suino)
            .expectStatus(StatusCodes.OK);
        });
      });

/**
       * Teste 13: verificar item suino a um mercado
       * GET /mercado/{200}/produtos/acougue/suino
       */
describe('Testar funcionamento do get de bovino na api', () => {
    it('Deve verificar item no mercado do id 200', async () => {
      await p
        .spec()
        .get(`${baseUrl}/mercado/{200}/produtos/acougue/suinos`)
        .expectStatus(StatusCodes.OK);
    });
  });

      /**
       * Teste 14: Adicionar item aves a um mercado
       * PUT /mercado/{200}/produtos/acougue/aves
       */
      describe('Testar funcionamento do POST de aves na api', () => {
        it('Deve adicionar item ao mercado do id 200', async () => {
          const ave = {
            nome: 'peito',
            valor: 2
          };
          await p
            .spec()
            .post(`${baseUrl}/mercado/{200}/produtos/acougue/aves`)
            .withJson(ave)
            .expectStatus(StatusCodes.OK);
        });
      });

/**
       * Teste 15: verificar item aves a um mercado
       * GET /mercado/{200}/produtos/acougue/aves
       */
describe('Testar funcionamento do get de aves na api', () => {
    it('Deve verificar item no mercado do id 200', async () => {
      await p
        .spec()
        .get(`${baseUrl}/mercado/{200}/produtos/acougue/aves`)
        .expectStatus(StatusCodes.OK);
    });
  });

      /**
       * Teste 16: Deletar um mercado
       * DELETE /mercado/id
       */
      describe('Testar funcionamento do DELETE na api', () => {
        it('Deve deletar dados de mercado do id 200', async () => {
          await p
            .spec()
            .delete(`${baseUrl}/mercado/200`)
            .expectStatus(StatusCodes.OK);
        });
      });

    });
  });
});
