public class Main {
    public static void main(String[] args) {
        Product[] catalog = {
            new Product(105, "Shoes", "Footwear"),
            new Product(101, "Phone", "Electronics"),
            new Product(212, "T-Shirt", "Clothing"),
            new Product(150, "Blender", "Home"),
            new Product(175, "Book", "Stationery")
        };
        int searchId = 150;
        System.out.println("Linear Search:");
        Product linearResult = LinearSearch.findById(catalog, searchId);
        if (linearResult != null) {
            System.out.println("Found: " + linearResult.getProductName() + " (Category: " + linearResult.getCategory() + ")");
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("\nBinary Search:");
        BinarySearch.sortById(catalog);
        Product binaryResult = BinarySearch.findById(catalog, searchId);
        if (binaryResult != null) {
            System.out.println("Found: " + binaryResult.getProductName() + " (Category: " + binaryResult.getCategory() + ")");
        } else {
            System.out.println("Product not found.");
        }
    }
}
