const mixins = {
  computed:{
    
  },
  methods: {
    limitCaracters(string, limit) {
      if (string.length >= limit) {
        return string.substring(0, limit) + '...';
      }

      return string;
    },
    stringSeparator() {},
    toastMessage(data, type = "error") {
      var property;
      if(type === 'success'){
        if(typeof data === "string"){
          this.$noty.success(data);
        }else{
          for (property in data) {
            this.$noty.error(data[property]);
          }
        }
      }else if(type === 'error'){
        if(data === undefined){
          this.$noty.error('Erro inesperado, tente novamente!');
        }else if(typeof data === "string"){
          this.$noty.error(data);
        }else{
          for (property in data) {
            this.$noty.error(data[property]);
          }
        }
      }
    },
    alertConfirmation(title, text, type, showCancelButton = true){
      return new Promise((resolve, reject) => {
        this.$fire({
          title,
          text,
          type,
          showCancelButton,
        }).then((res) => {
          if(res.value === undefined) resolve(false);
          resolve(true);  
        }).catch((err) => {
          reject(err);
        });
      })
    },
    datePT(date){
      if(date){
        if(date.length >= 10){
          return date.substring(8,10)+"/"+date.substring(5,7)+"/"+date.substring(0,4);
        }
      }
    },
    hour(date){
      if(date){
        if(date.length >= 11){
          return date.substring(11,13)+":"+date.substring(14,16);
        }
      }
    },
    dateHourPT(date){
      if(date){
        if(date.length >= 10){
          return `${date.substring(8,10)}/${date.substring(5,7)}/${+date.substring(2,4)} ${date.substring(11,13)}:${date.substring(14,16)}`;
        }
      }
    },
    filterSearch(value_search){
      if(value_search.length > 0){
        let filter_data = [];
        
        for(let i=0; i<this.users.length; i++){
          value_search = value_search.toLowerCase();
          let value = this.data_list[i].name.toLowerCase();
          this.users = this.data_list;

          if(value.includes(value_search)){
            filter_data.push(this.users[i]);
          }
        }

        this.users = filter_data;
      }else{
        this.users = this.data_list;
      }
    },
  },
};

export default mixins;
