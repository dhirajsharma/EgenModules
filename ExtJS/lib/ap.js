Ext.require([
    'Ext.form.*',
    'Ext.tip.*',
    'Ext.data.*',
    'Ext.grid.Panel',
    'Ext.layout.container.Column'
]);
Ext.onReady(function () {
    
    Ext.QuickTips.init();
    function submitOnEnter(field, event) {
        if (event.getKey() == event.ENTER) {
            var form = field.up('form').getForm();
            form.submit();
        }
    }

    

    // Data
    

    // Form
    // -----------------------------------------------------------------------

    var addUserForm = Ext.create('Ext.form.Panel', {
        //renderTo: Ext.getBody(),
        renderTo: "extJSData",
        frame: true,
        title: 'Family Details',
        //bodyPadding: 10,
        autoScroll: false,
        width: 500,
        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 115,
            msgTarget: 'side'
        },
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
        },
        items: [{
                xtype: 'fieldset',
                title: 'Member Information',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                        allowBlank: false,
                        fieldLabel: 'First Name',
                        name: 'memberFirstName',
                        emptyText: 'first name',
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        allowBlank: false,
                        fieldLabel: 'Last Name',
                        name: 'memberLastName,',
                        emptyText: 'last name',
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: 'Gender',
                        columns: 2,
                        itemId: 'memberGender',
                        items: [{
                                xtype: 'radiofield',
                                boxLabel: 'Male',
                                name: 'memberGender',
                                checked: true,
                                inputValue: 'male'
                            }, {
                                xtype: 'radiofield',
                                boxLabel: 'Female',
                                name: 'memberGender',
                                inputValue: 'female'
                            }],
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        fieldLabel: 'SSN',
                        //xtype: 'num',
                        name: 'memberSSN',
                        //vtype: 'ssn',
                        minLength: 9,
                        maxLength: 9,
                        allowBlank: false,
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Birth',
                        name: 'memberDOB',
                        allowBlank: false,
                        maxValue: new Date(),
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }]
            }, {
                xtype: 'fieldset',
                title: 'Spouse Information',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                        allowBlank: false,
                        fieldLabel: 'First Name',
                        name: 'spouseFirstName',
                        emptyText: 'first name',
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        allowBlank: false,
                        fieldLabel: 'Last Name',
                        name: 'spouseLastName,',
                        emptyText: 'last name',
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: 'Gender',
                        columns: 2,
                        itemId: 'spouseGender',
                        items: [{
                                xtype: 'radiofield',
                                boxLabel: 'Male',
                                name: 'spouseGender',
                                checked: true,
                                inputValue: 'male'
                            }, {
                                xtype: 'radiofield',
                                boxLabel: 'Female',
                                name: 'spouseGender',
                                inputValue: 'female'
                            }],
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        fieldLabel: 'SSN',
                        //xtype: 'num',
                        name: 'spouseSSN',
                        //vtype: 'ssn',
//                        minLength: 9,
  //                      maxLength: 9,
                        allowBlank: false,
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Birth',
                        name: 'spouseDOB',
                        allowBlank: false,
                        maxValue: new Date(),
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }]
            }, {
                xtype: 'fieldset',
                title: 'Child Information',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                        allowBlank: false,
                        fieldLabel: 'First Name',
                        name: 'childFirstName',
                        emptyText: 'first name',
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        allowBlank: false,
                        fieldLabel: 'Last Name',
                        name: 'childLastName,',
                        emptyText: 'last name',
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: 'Gender',
                        columns: 2,
                        itemId: 'childGender',
                        items: [{
                                xtype: 'radiofield',
                                boxLabel: 'Male',
                                name: 'childGender',
                                checked: true,
                                inputValue: 'male'
                            }, {
                                xtype: 'radiofield',
                                boxLabel: 'Female',
                                name: 'childGender',
                                inputValue: 'female'
                            }],
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        fieldLabel: 'SSN',
                        //xtype: 'num',
                        name: 'childSSN',
                        //vtype: 'ssn',
                        minLength: 9,
                        maxLength: 9,
                        allowBlank: false,
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Birth',
                        name: 'childDOB',
                        allowBlank: false,
                        maxValue: new Date(),
                        listeners: {
                            spacialkey: submitOnEnter
                        }
                    }]
            }
        ],
        buttons: [{
            text: 'Submit',
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function(form, action) {
                           Ext.Msg.alert('Success', 'action.result.messag');
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', 'No response');
                        }
                    });
                } else {
                    Ext.Msg.alert( "Error!", "Your form is invalid!" );
                }
            }
        }]
//        buttons: [{
//                id: 'saveBtn',
//                itemId: 'saveBtn',
//                text: 'Display',
//                handler: function () {
//                    this.up('form').getForm().submit({
//                        success: function(f,a){
//                            Ext.Msg.alert('Success', 'It worked');
//                        },
//                        failure: function(f,a){
//                            Ext.Msg.alert('Warning', 'Error');
//                        }
//                    });
//                }
//            }],
//        submit: function () {
//            success: function(f,a){
//                Ext.Msg.alert('Success', 'it worked');
//            },
//            failure: function(f,a){
//                Ext.Msg.alert('Warning', 'Error');
//            }
////            var currentForm = this.owner.form;
////            if (currentForm.isValid()) {
//                // var newSomething = Ext.create('Something', currentForm.getFieldValues());
////            }
//        }
    });
});