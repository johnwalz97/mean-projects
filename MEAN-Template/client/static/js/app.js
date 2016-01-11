var OrdersApp = angular.module('Customers', ['ngRoute']);

//configure routes
OrdersApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/dashboard.html'    
        })
        .when('/customers', {
            templateUrl: '/partials/customers.html'    
        })
        .when('/orders', {
            templateUrl: '/partials/orders.html'    
        })
        .when('/products', {
            templateUrl: '/partials/products.html'    
        })
        .when('/settings', {
            templateUrl: '/partials/settings.html'    
        })
        .otherwise({
            redirectTo: '/'
        });
});

//customers factory
OrdersApp.factory('customerFactory', function(){
    var factory = {};
    factory.getCustomers = function (callback){
        $.get(
            "/customers",
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.getCustomersQty = function(qty, callback){
        $.get(
            "/customers/" + qty,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.addCustomer = function(customer, callback){
        $.post(
            "/customers",
            customer,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.updateCustomer = function(id, customer, callback){
        $.post(
            "/customer/" + id,
            customer,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.deleteCustomer = function(id, callback){
        $.get(
            "/customer/delete/" + id,
            function (response) {
                console.log(response);
            },
            "json"
        )
    }
    return factory;
})

//orders factory
OrdersApp.factory('orderFactory', function(){
    var factory = {};
    factory.getOrders = function (callback){
        $.get(
            "/orders",
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.getOrdersQty = function(qty, callback){
        $.get(
            "/orders/" + qty,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.addOrder = function(order, callback){
        $.post(
            "/orders",
            order,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.updateOrder = function(id, order, callback){
        $.post(
            "/order/" + id,
            order,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.deleteOrder = function(id, callback){
        $.get(
            "/order/delete/" + id,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    return factory;
})

//products factory
OrdersApp.factory('productFactory', function(){
    var factory = {};
    factory.getProducts = function (callback){
        $.get(
            "/products",
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.getProductsQty = function(qty, callback){
        $.get(
            "/products/" + qty,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.addProduct = function(product, callback){
        $.post(
            "/products",
            product,
            function (response) {
                callback(response);
            },
            "json"
        )
        console.log(product)
    }
    factory.updateProduct = function(id, product, callback){
        $.post(
            "/product/" + id,
            product,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    factory.deleteProduct = function(id, callback){
        $.get(
            "/product/delete/" + id,
            function (response) {
                callback(response);
            },
            "json"
        )
    }
    return factory;
})

//customers controller
OrdersApp.controller('customersController', function(customerFactory, $scope){
    customerFactory.getCustomers(function(customers){
        $scope.customers = customers;
        $scope.$apply();
    });
    $scope.removeCustomer = function(id){
        customerFactory.deleteCustomer(id, function(customers){
            $scope.customers = customers;
            $scope.$apply();
        });
    }
    $scope.addCustomer = function(){
        //var error = false;
        //for(var i = 0; i < $scope.customers.length; i++){
        //    if ($scope.customers[i].name == $scope.newcustomer) {
        //        error = true;
        //    }
        //}
        //if (error) {
        //    $scope.newcustomer_err = "Customer already exists";
        //} else if (!$scope.newcustomer){
        //    $scope.newcustomer_err = "Customer name cannot be empty";
        //} else {
            var customer = {name: $scope.newcustomer}
            console.log("creating customer")
            customerFactory.addCustomer(customer, function(customers){
                $scope.customers = customers;
                $scope.$apply();
            });
            $scope.newcustomer = '';
            $scope.newcustomer_err = '';
        //}
    }
})

//products controller
OrdersApp.controller('productsController', function(productFactory, $scope){
    productFactory.getProducts(function(products){
        $scope.products = products;
        $scope.$apply();
    });
    $scope.removeProduct = function(id){
        console.log("deleting " + id)
        productFactory.deleteProduct(id, function(products){
            $scope.products = products
            $scope.$apply();
        });
    }
    $scope.addProduct = function(){
        //var error = false;
        //for(var i = 0; i < $scope.products.length; i++){
        //    if ($scope.products[i].name == $scope.newproduct) {
        //        error = true;
        //    }
        //}
        //if (error) {
        //    $scope.newproduct_err = "Product already exists";
        //} else if (!$scope.newcustomer){
        //    $scope.newproduct_err = "Product name cannot be empty";
        //} else {
            var product = {name: $scope.newproduct}
            productFactory.addProduct(product, function(products){
                $scope.products = products;
                $scope.$apply();
            });
            $scope.newproduct = '';
            $scope.newproduct_err = '';
        //}
    }
})

//orders controller
OrdersApp.controller('ordersController', function(orderFactory, customerFactory, productFactory, $scope){
    customerFactory.getCustomers(function(customers){
        $scope.customers = customers;
        $scope.$apply();
    });
    productFactory.getProducts(function(products){
        $scope.products = products;
        $scope.$apply();
    });
    orderFactory.getOrders(function(orders){
        $scope.orders = orders;
        $scope.$apply();
    });
    $scope.quantity = 1;
    $scope.removeOrder = function(id){
        orderFactory.deleteOrder(id, function(orders){
            $scope.orders = orders;
            $scope.$apply();
        });
    }
    $scope.addOrder = function(){
        console.log($scope.customer);
        var order = {customer: $scope.customer.name, product: $scope.product.name, quantity: $scope.quantity};
        orderFactory.addOrder(order, function(orders){
            $scope.orders = orders;
            $scope.$apply()
        });
        $scope.customer = $scope.customers[0];
        $scope.product = $scope.products[0];
        $scope.quantity = 1;
    }
})

//dashboard controller
OrdersApp.controller('dashboardController', function(orderFactory, customerFactory, productFactory, $scope){
    customerFactory.getCustomersQty(5, function(customers){
        $scope.customers = customers
        $scope.$apply();
    });
    productFactory.getProductsQty(5, function(products){
        $scope.products = products;
        $scope.$apply();
    });
    orderFactory.getOrdersQty(5, function(orders){
        $scope.orders = orders;
        $scope.$apply();
    });
})