// BUDGET CONTROLLER
var budgetController = (function() {
    
   var Expense = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
       this.percentage = -1;
   };
    
    Expense.prototype.calcPercentage = function(totalIncome) {
        if(totalIncome > 0) {
            this.percentage = Math.round ((this.value / totalIncome) * 100);
        }else {
            this.percentage = -1;
        }
    };
    
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }
    
    var Income = function(id, description, value) {
       this.id = id;
       this.description = description;
       this.value = value;
   };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;

    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            //Create new ID
            if(data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                
            }else {
                ID = 0;
            }
            //Create new item base on inc or exp type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //Push it into our data structure
            data.allItems[type].push(newItem);
            //Return the new eleemnt
            return newItem;
        },
        
        delteItem: function(type, id) {
            var ids, index;
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            
            index = ids.indexOf(id);
            
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }
            
        },
        
        calculateBudget: function() {
            // calc total inc and exp
            calculateTotal('exp');
            calculateTotal('inc');
            // calc the budget: income - exp
            data.budget = data.totals.inc - data.totals.exp;
            // calc the percentage of income that we spent
            if(data.totals.inc > 0) {
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else {
                data.percentage = -1;
            }
        },
        
        calculatePercentages: function() {
          
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
            
        },
        
        getPercentages: function() {
          
            var allPerc = data.allItems.exp.map(function(cur){
               return cur.getPercentage();
            });
            return allPerc;
            
        },
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                percentage: data.percentage
            };
        },
        
        testing: function() {
            console.log(data);
        }
    };
})();

// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
    var formatNumber = function(num, type) {
          
            //+ or - before the number
            //exactly 2 decimel points
            //comma seperating the thousands
            var numSplit, int, dec, type;
            
            num = Math.abs(num);
            num = num.toFixed(2);
            
            numSplit = num.split('.');
            int = numSplit[0];
            if(int.length > 3) {
                int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length);
            }
                
                
            dec = numSplit[1];
            return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;
        };
        var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }  
            };
    
    return {
        getinput: function() {
            return {
                
                type: document.querySelector(DOMstrings.inputType).value,// will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value:parseFloat(document.querySelector(DOMstrings.inputValue).value)
                };
        },
        
        addListItem: function(obj, type){
            // Create html string with placeholder text
            var html, newHtml,element;
            if (type === 'inc') {
            element = DOMstrings.incomeContainer;
            html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div></div>';
            } else if (type === 'exp') {
            element = DOMstrings.expensesContainer;
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div></div>';
            }
            //replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            //iinsert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        deleteListItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        
        clearFields: function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);
            
            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });
            
            fieldsArray[0].focus();
            
        },
        
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalIncome, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExpenses, 'exp');
            
            if(obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';

            }else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';

            }
        },
        
        displayPercentages: function(percentages) {
          
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            
            
            
            nodeListForEach(fields, function(current, index) {
                
                if(percentages[index] > 0 ) {
               current.textContent = percentages[index] + '%';
                    
                } else {
                    current.textContent = '---';

                }
            });
        },
        
        displayMonth: function() {
            var now, year, month, months;
            now = new Date();
            
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' '+ year;
            
        },
        
        changedType: function() {
          var fields = document.querySelectorAll(
            DOMstrings.inputType + ',' +
            DOMstrings.inputDescription + ',' +
            DOMstrings.inputValue);
            
            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UiCtrl){
    
    var setupEventListeners = function(){
        
        var DOM = UiCtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
     document.querySelector(DOM.inputType).addEventListener('change',UiCtrl.changedType);
    };
    
   var updateBudget = function() {
       //1. Calculate the budget 
       budgetCtrl.calculateBudget();
       // 2 return the budget 
        var budget = budgetCtrl.getBudget();
        //3 display the buddget on the UI
       UiCtrl.displayBudget(budget);
   };
    
    var updatePercentage = function() {
        //1 calculate percentage
        budgetCtrl.calculatePercentages();
        //2 Read percentages from the budghet controller
        var percentages = budgetCtrl.getPercentages();
        //3 Update the UI with new percentages
        UiCtrl.displayPercentages(percentages);
    };
    
    var ctrlAddItem = function() {
        
        var input, newItem;
        // 1. Get field input data
        input = UiCtrl.getinput();
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
        //2 Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. Add the new item to UI
            UiCtrl.addListItem(newItem, input.type);
        
        //4 Clear fields
            UiCtrl.clearFields();
        
        // 5 calc and update budget
            updateBudget();
            
        // 6 calculate ant update percentages
            updatePercentage();
        }
        
        
    };
    
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //1. delete the item for data structure
            budgetCtrl.delteItem(type, ID);
            //2. delete the item from the UI
            UiCtrl.deleteListItem(itemID);
            //3.Update ant show new budget
            updateBudget();
            
            updatePercentage();
        }
    };
    
    return {
        init: function(){
            console.log('App started');
            UiCtrl.displayMonth();
            UiCtrl.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpenses: 0,
                percentage: -1
            });
            setupEventListeners();
            
        }
    }; 
})(budgetController, UIController);

controller.init();

