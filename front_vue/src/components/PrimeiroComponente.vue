<template>
    <div class="principal-container">
        <div class="buttom-center">
        <button  class="buttom-cadastro" @click="exibirFormulario"> Novo cadastro </button>
        </div>
        <CadastroCliente ref="cadastroCliente" v-if="mostrarFormulario" @fecharFormulario="fecharFormulario"/>

        <ListaClientes @atualizarLista="atualizarLista"/>
    </div>
    
</template>

<script>
    import CadastroCliente from './CadastroCliente.vue'
    import ListaClientes from './ListaClientes.vue'

    export default {
        name: 'PrimeiroComponente',
        components: {
            CadastroCliente,
            ListaClientes
        },
        data() {
            return {
                mostrarFormulario: false,
                mostrarCadastros: false,
            };
        },

        methods: {
            exibirFormulario() {
                this.mostrarFormulario = true;
            },

            fecharFormulario() {
                this.mostrarFormulario = false;
            },


            listarCadastros() {
                this.mostrarCadastros = true;
            },

            atualizarLista() {
                this.mostrarCadastros = false;
                this.$nextTick(() =>{
                    this.mostrarCadastros = true;
                })
                  
            },
        }
    };
</script>

<style>

    * {
        font-family: "Poppins", roboto;
        font-weight: 500;
    }


    .buttom-cadastro {
        background-color: #007bff;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 40px;
        margin-bottom: 0px;
        margin-right: 30px;
    }

    .buttom-center {
        display: flex;
        justify-content: flex-end;
    }

.buttom-cadastro:hover {
  background-color: #0056b3;
}

</style>