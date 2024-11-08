import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
    private stable var names : [Text] = [];

    public func greet(name : Text) : async Text {
        names := Array.append<Text>(names, [name]);
        return "Hello, " # name # "!";
    };

    public query func submittedNames() : async [Text] {
        return Array.map<Text, Text>(names, func(name) { "Hello, " # name # "!" });
    };
}
