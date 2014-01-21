#!/bin/env python

import json
from pprint import pprint

data = [ { 'a':'A', 'b':(2, 4), 'c':3.0 } ]
data_string = json.dumps(data)
decoded = json.loads(data_string)
print data[0]['b']
