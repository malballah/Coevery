﻿using System;
using Orchard.ContentManagement;
using Orchard.ContentManagement.FieldStorage;

namespace Coevery.Fields.Fields {
    public class CoeveryTextField : ContentField {
        public string Value {
            get { return Storage.Get<string>(DisplayName); }
            set { Storage.Set(value ?? String.Empty); }
        }
    }
}
